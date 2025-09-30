import { writeFileSync } from 'node:fs'

const OUTPUT_FILENAME = './index.js'

// Archive back up: https://web.archive.org/web/20250707194216if_/https://raw.githubusercontent.com/saschanaz/types-web/refs/heads/main/baselines/dom.generated.d.ts
const DOM_SRC_URL = 'https://raw.githubusercontent.com/saschanaz/types-web/refs/heads/main/baselines/dom.generated.d.ts'

// Used to find the start of the tag maps
const FIRST_LINE_OF_CURRENT_TAG_MAP = 'interface HTMLElementTagNameMap {'
const FIRST_LINE_OF_DEPRECATED_TAG_MAP = 'interface HTMLElementDeprecatedTagNameMap {'

/**
 * Splits a string on the first occurrence of a substring
 * @param {string} text - The text to search
 * @param {string} target - The substring to find
 * @returns {[string, string]} - The text before and after the target
 */
function splitOnSubstring(text, target) {
    const targetIndex = text.indexOf(target)

    if (targetIndex === -1) {
        throw new Error(`Could not find "${target}" in "${text}"`)
    }

    const beforeTarget = text.slice(0, targetIndex)
    const afterTarget = text.slice(targetIndex + target.length)
    return [beforeTarget, afterTarget]
}

/**
 * Extracts the tag name and type from a single row of the TypeScript map
 * @param {string} row - The text of the row
 * @returns {[string, string]} - A tuple containing the tag name and its type
 */
function getTagAndTypeFromRow(row) {
    const [, textAfterFirstQuote] = splitOnSubstring(row, '"')
    const [tag, textAfterColon] = splitOnSubstring(textAfterFirstQuote, '": ')
    const [type] = splitOnSubstring(textAfterColon, ';')
    return [tag, type]
}

/**
 * Extracts the tag names and their corresponding types from a TypeScript map
 * @param {string} mapText - The text of the TypeScript map
 * @returns {Array<[string, string]>} - An array of tuples containing tag names and their types
 */
function getTagsAndTypesFromMap(mapText) {
    const rawRows = mapText.split('\n')
    const rows = rawRows.slice(1, -1)
    return rows.map(getTagAndTypeFromRow)
}

const HELPER_FUNCTION_TEXT = /*js*/ `/**
 * Adds attributes and children to an element
 * @param {HTMLElement} element - the element to add attributes and children to
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param {Array.<number | string | HTMLElement>} children - the children to add to the element
 */
function addAttrsAndChildren(element, attrs, children) {
    for (const [key, value] of Object.entries(attrs)) {
        element.setAttribute(key, value)
    }

    for (const child of children) {
        if (typeof child === 'number') {
            element.appendChild(document.createTextNode(child.toString()))
        } else if (typeof child === 'string') {
            element.appendChild(document.createTextNode(child))
        } else if (child) {
            element.appendChild(child)
        }
    }
}
`

/**
 * Makes a string that is a function creating an element of the given tag and type
 * @param {[string, string]} param0 - a tuple containing the tag name and its type
 * @returns {string} - the function as a string
 */
function makeDMFunction([tag, type]) {
    return /*js*/ `/**
 * Creates a new "${tag}" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {${type}} The newly created element
 */
export function ${tag === 'var' ? 'dmVar' : tag}(attrs = {}, ...children) {
    const element = document.createElement('${tag}')
    addAttrsAndChildren(element, attrs, children)
    return element
}
`
}

async function main() {
    console.log('Fetching map of HTML tags to TypeScript types...')
    const domSrcResp = await fetch(DOM_SRC_URL)
    const domSrcText = await domSrcResp.text()

    console.log('Extracting tag maps...')
    const indexOfCurrentTagMap = domSrcText.indexOf(FIRST_LINE_OF_CURRENT_TAG_MAP)
    const textAfterStartOfCurrentTagMap = domSrcText.slice(indexOfCurrentTagMap)
    const indexOfDeprecatedTagMap = textAfterStartOfCurrentTagMap.indexOf(FIRST_LINE_OF_DEPRECATED_TAG_MAP)
    const textAfterStartOfDeprecatedTagMap = textAfterStartOfCurrentTagMap.slice(indexOfDeprecatedTagMap)

    const indexOfCurrentTagMapEnd = textAfterStartOfCurrentTagMap.indexOf('}')
    const indexOfDeprecatedTagMapEnd = textAfterStartOfDeprecatedTagMap.indexOf('}')

    const currentTagMapText = textAfterStartOfCurrentTagMap.slice(0, indexOfCurrentTagMapEnd)
    const deprecatedTagMapText = textAfterStartOfDeprecatedTagMap.slice(0, indexOfDeprecatedTagMapEnd)

    const currentTagAList = getTagsAndTypesFromMap(currentTagMapText)
    const deprecatedTagAList = getTagsAndTypesFromMap(deprecatedTagMapText)
    console.log(`Found ${currentTagAList.length} current tags and ${deprecatedTagAList.length} deprecated tags`)

    console.log('Generating source code from tag maps...')
    const content = [
        HELPER_FUNCTION_TEXT,
        ...currentTagAList.map(makeDMFunction),
        ...deprecatedTagAList.map(makeDMFunction),
    ].join('\n')

    console.log('Writing to file...')
    writeFileSync(OUTPUT_FILENAME, content)

    console.log(`Successfully wrote to ${OUTPUT_FILENAME}`)
}

main()
