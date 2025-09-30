/**
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

/**
 * Creates a new "a" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLAnchorElement} The newly created element
 */
export function a(attrs = {}, ...children) {
    const element = document.createElement('a')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "abbr" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLElement} The newly created element
 */
export function abbr(attrs = {}, ...children) {
    const element = document.createElement('abbr')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "address" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLElement} The newly created element
 */
export function address(attrs = {}, ...children) {
    const element = document.createElement('address')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "area" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLAreaElement} The newly created element
 */
export function area(attrs = {}, ...children) {
    const element = document.createElement('area')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "article" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLElement} The newly created element
 */
export function article(attrs = {}, ...children) {
    const element = document.createElement('article')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "aside" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLElement} The newly created element
 */
export function aside(attrs = {}, ...children) {
    const element = document.createElement('aside')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "audio" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLAudioElement} The newly created element
 */
export function audio(attrs = {}, ...children) {
    const element = document.createElement('audio')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "b" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLElement} The newly created element
 */
export function b(attrs = {}, ...children) {
    const element = document.createElement('b')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "base" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLBaseElement} The newly created element
 */
export function base(attrs = {}, ...children) {
    const element = document.createElement('base')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "bdi" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLElement} The newly created element
 */
export function bdi(attrs = {}, ...children) {
    const element = document.createElement('bdi')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "bdo" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLElement} The newly created element
 */
export function bdo(attrs = {}, ...children) {
    const element = document.createElement('bdo')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "blockquote" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLQuoteElement} The newly created element
 */
export function blockquote(attrs = {}, ...children) {
    const element = document.createElement('blockquote')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "body" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLBodyElement} The newly created element
 */
export function body(attrs = {}, ...children) {
    const element = document.createElement('body')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "br" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLBRElement} The newly created element
 */
export function br(attrs = {}, ...children) {
    const element = document.createElement('br')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "button" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLButtonElement} The newly created element
 */
export function button(attrs = {}, ...children) {
    const element = document.createElement('button')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "canvas" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLCanvasElement} The newly created element
 */
export function canvas(attrs = {}, ...children) {
    const element = document.createElement('canvas')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "caption" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLTableCaptionElement} The newly created element
 */
export function caption(attrs = {}, ...children) {
    const element = document.createElement('caption')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "cite" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLElement} The newly created element
 */
export function cite(attrs = {}, ...children) {
    const element = document.createElement('cite')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "code" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLElement} The newly created element
 */
export function code(attrs = {}, ...children) {
    const element = document.createElement('code')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "col" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLTableColElement} The newly created element
 */
export function col(attrs = {}, ...children) {
    const element = document.createElement('col')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "colgroup" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLTableColElement} The newly created element
 */
export function colgroup(attrs = {}, ...children) {
    const element = document.createElement('colgroup')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "data" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLDataElement} The newly created element
 */
export function data(attrs = {}, ...children) {
    const element = document.createElement('data')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "datalist" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLDataListElement} The newly created element
 */
export function datalist(attrs = {}, ...children) {
    const element = document.createElement('datalist')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "dd" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLElement} The newly created element
 */
export function dd(attrs = {}, ...children) {
    const element = document.createElement('dd')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "del" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLModElement} The newly created element
 */
export function del(attrs = {}, ...children) {
    const element = document.createElement('del')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "details" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLDetailsElement} The newly created element
 */
export function details(attrs = {}, ...children) {
    const element = document.createElement('details')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "dfn" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLElement} The newly created element
 */
export function dfn(attrs = {}, ...children) {
    const element = document.createElement('dfn')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "dialog" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLDialogElement} The newly created element
 */
export function dialog(attrs = {}, ...children) {
    const element = document.createElement('dialog')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "div" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLDivElement} The newly created element
 */
export function div(attrs = {}, ...children) {
    const element = document.createElement('div')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "dl" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLDListElement} The newly created element
 */
export function dl(attrs = {}, ...children) {
    const element = document.createElement('dl')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "dt" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLElement} The newly created element
 */
export function dt(attrs = {}, ...children) {
    const element = document.createElement('dt')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "em" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLElement} The newly created element
 */
export function em(attrs = {}, ...children) {
    const element = document.createElement('em')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "embed" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLEmbedElement} The newly created element
 */
export function embed(attrs = {}, ...children) {
    const element = document.createElement('embed')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "fieldset" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLFieldSetElement} The newly created element
 */
export function fieldset(attrs = {}, ...children) {
    const element = document.createElement('fieldset')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "figcaption" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLElement} The newly created element
 */
export function figcaption(attrs = {}, ...children) {
    const element = document.createElement('figcaption')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "figure" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLElement} The newly created element
 */
export function figure(attrs = {}, ...children) {
    const element = document.createElement('figure')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "footer" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLElement} The newly created element
 */
export function footer(attrs = {}, ...children) {
    const element = document.createElement('footer')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "form" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLFormElement} The newly created element
 */
export function form(attrs = {}, ...children) {
    const element = document.createElement('form')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "h1" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLHeadingElement} The newly created element
 */
export function h1(attrs = {}, ...children) {
    const element = document.createElement('h1')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "h2" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLHeadingElement} The newly created element
 */
export function h2(attrs = {}, ...children) {
    const element = document.createElement('h2')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "h3" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLHeadingElement} The newly created element
 */
export function h3(attrs = {}, ...children) {
    const element = document.createElement('h3')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "h4" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLHeadingElement} The newly created element
 */
export function h4(attrs = {}, ...children) {
    const element = document.createElement('h4')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "h5" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLHeadingElement} The newly created element
 */
export function h5(attrs = {}, ...children) {
    const element = document.createElement('h5')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "h6" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLHeadingElement} The newly created element
 */
export function h6(attrs = {}, ...children) {
    const element = document.createElement('h6')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "head" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLHeadElement} The newly created element
 */
export function head(attrs = {}, ...children) {
    const element = document.createElement('head')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "header" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLElement} The newly created element
 */
export function header(attrs = {}, ...children) {
    const element = document.createElement('header')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "hgroup" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLElement} The newly created element
 */
export function hgroup(attrs = {}, ...children) {
    const element = document.createElement('hgroup')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "hr" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLHRElement} The newly created element
 */
export function hr(attrs = {}, ...children) {
    const element = document.createElement('hr')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "html" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLHtmlElement} The newly created element
 */
export function html(attrs = {}, ...children) {
    const element = document.createElement('html')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "i" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLElement} The newly created element
 */
export function i(attrs = {}, ...children) {
    const element = document.createElement('i')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "iframe" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLIFrameElement} The newly created element
 */
export function iframe(attrs = {}, ...children) {
    const element = document.createElement('iframe')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "img" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLImageElement} The newly created element
 */
export function img(attrs = {}, ...children) {
    const element = document.createElement('img')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "input" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLInputElement} The newly created element
 */
export function input(attrs = {}, ...children) {
    const element = document.createElement('input')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "ins" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLModElement} The newly created element
 */
export function ins(attrs = {}, ...children) {
    const element = document.createElement('ins')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "kbd" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLElement} The newly created element
 */
export function kbd(attrs = {}, ...children) {
    const element = document.createElement('kbd')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "label" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLLabelElement} The newly created element
 */
export function label(attrs = {}, ...children) {
    const element = document.createElement('label')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "legend" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLLegendElement} The newly created element
 */
export function legend(attrs = {}, ...children) {
    const element = document.createElement('legend')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "li" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLLIElement} The newly created element
 */
export function li(attrs = {}, ...children) {
    const element = document.createElement('li')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "link" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLLinkElement} The newly created element
 */
export function link(attrs = {}, ...children) {
    const element = document.createElement('link')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "main" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLElement} The newly created element
 */
export function main(attrs = {}, ...children) {
    const element = document.createElement('main')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "map" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLMapElement} The newly created element
 */
export function map(attrs = {}, ...children) {
    const element = document.createElement('map')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "mark" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLElement} The newly created element
 */
export function mark(attrs = {}, ...children) {
    const element = document.createElement('mark')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "menu" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLMenuElement} The newly created element
 */
export function menu(attrs = {}, ...children) {
    const element = document.createElement('menu')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "meta" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLMetaElement} The newly created element
 */
export function meta(attrs = {}, ...children) {
    const element = document.createElement('meta')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "meter" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLMeterElement} The newly created element
 */
export function meter(attrs = {}, ...children) {
    const element = document.createElement('meter')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "nav" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLElement} The newly created element
 */
export function nav(attrs = {}, ...children) {
    const element = document.createElement('nav')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "noscript" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLElement} The newly created element
 */
export function noscript(attrs = {}, ...children) {
    const element = document.createElement('noscript')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "object" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLObjectElement} The newly created element
 */
export function object(attrs = {}, ...children) {
    const element = document.createElement('object')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "ol" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLOListElement} The newly created element
 */
export function ol(attrs = {}, ...children) {
    const element = document.createElement('ol')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "optgroup" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLOptGroupElement} The newly created element
 */
export function optgroup(attrs = {}, ...children) {
    const element = document.createElement('optgroup')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "option" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLOptionElement} The newly created element
 */
export function option(attrs = {}, ...children) {
    const element = document.createElement('option')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "output" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLOutputElement} The newly created element
 */
export function output(attrs = {}, ...children) {
    const element = document.createElement('output')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "p" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLParagraphElement} The newly created element
 */
export function p(attrs = {}, ...children) {
    const element = document.createElement('p')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "picture" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLPictureElement} The newly created element
 */
export function picture(attrs = {}, ...children) {
    const element = document.createElement('picture')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "pre" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLPreElement} The newly created element
 */
export function pre(attrs = {}, ...children) {
    const element = document.createElement('pre')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "progress" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLProgressElement} The newly created element
 */
export function progress(attrs = {}, ...children) {
    const element = document.createElement('progress')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "q" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLQuoteElement} The newly created element
 */
export function q(attrs = {}, ...children) {
    const element = document.createElement('q')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "rp" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLElement} The newly created element
 */
export function rp(attrs = {}, ...children) {
    const element = document.createElement('rp')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "rt" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLElement} The newly created element
 */
export function rt(attrs = {}, ...children) {
    const element = document.createElement('rt')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "ruby" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLElement} The newly created element
 */
export function ruby(attrs = {}, ...children) {
    const element = document.createElement('ruby')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "s" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLElement} The newly created element
 */
export function s(attrs = {}, ...children) {
    const element = document.createElement('s')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "samp" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLElement} The newly created element
 */
export function samp(attrs = {}, ...children) {
    const element = document.createElement('samp')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "script" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLScriptElement} The newly created element
 */
export function script(attrs = {}, ...children) {
    const element = document.createElement('script')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "search" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLElement} The newly created element
 */
export function search(attrs = {}, ...children) {
    const element = document.createElement('search')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "section" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLElement} The newly created element
 */
export function section(attrs = {}, ...children) {
    const element = document.createElement('section')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "select" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLSelectElement} The newly created element
 */
export function select(attrs = {}, ...children) {
    const element = document.createElement('select')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "slot" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLSlotElement} The newly created element
 */
export function slot(attrs = {}, ...children) {
    const element = document.createElement('slot')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "small" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLElement} The newly created element
 */
export function small(attrs = {}, ...children) {
    const element = document.createElement('small')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "source" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLSourceElement} The newly created element
 */
export function source(attrs = {}, ...children) {
    const element = document.createElement('source')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "span" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLSpanElement} The newly created element
 */
export function span(attrs = {}, ...children) {
    const element = document.createElement('span')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "strong" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLElement} The newly created element
 */
export function strong(attrs = {}, ...children) {
    const element = document.createElement('strong')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "style" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLStyleElement} The newly created element
 */
export function style(attrs = {}, ...children) {
    const element = document.createElement('style')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "sub" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLElement} The newly created element
 */
export function sub(attrs = {}, ...children) {
    const element = document.createElement('sub')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "summary" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLElement} The newly created element
 */
export function summary(attrs = {}, ...children) {
    const element = document.createElement('summary')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "sup" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLElement} The newly created element
 */
export function sup(attrs = {}, ...children) {
    const element = document.createElement('sup')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "table" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLTableElement} The newly created element
 */
export function table(attrs = {}, ...children) {
    const element = document.createElement('table')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "tbody" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLTableSectionElement} The newly created element
 */
export function tbody(attrs = {}, ...children) {
    const element = document.createElement('tbody')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "td" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLTableCellElement} The newly created element
 */
export function td(attrs = {}, ...children) {
    const element = document.createElement('td')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "template" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLTemplateElement} The newly created element
 */
export function template(attrs = {}, ...children) {
    const element = document.createElement('template')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "textarea" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLTextAreaElement} The newly created element
 */
export function textarea(attrs = {}, ...children) {
    const element = document.createElement('textarea')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "tfoot" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLTableSectionElement} The newly created element
 */
export function tfoot(attrs = {}, ...children) {
    const element = document.createElement('tfoot')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "th" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLTableCellElement} The newly created element
 */
export function th(attrs = {}, ...children) {
    const element = document.createElement('th')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "thead" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLTableSectionElement} The newly created element
 */
export function thead(attrs = {}, ...children) {
    const element = document.createElement('thead')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "time" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLTimeElement} The newly created element
 */
export function time(attrs = {}, ...children) {
    const element = document.createElement('time')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "title" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLTitleElement} The newly created element
 */
export function title(attrs = {}, ...children) {
    const element = document.createElement('title')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "tr" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLTableRowElement} The newly created element
 */
export function tr(attrs = {}, ...children) {
    const element = document.createElement('tr')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "track" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLTrackElement} The newly created element
 */
export function track(attrs = {}, ...children) {
    const element = document.createElement('track')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "u" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLElement} The newly created element
 */
export function u(attrs = {}, ...children) {
    const element = document.createElement('u')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "ul" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLUListElement} The newly created element
 */
export function ul(attrs = {}, ...children) {
    const element = document.createElement('ul')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "var" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLElement} The newly created element
 */
export function dmVar(attrs = {}, ...children) {
    const element = document.createElement('var')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "video" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLVideoElement} The newly created element
 */
export function video(attrs = {}, ...children) {
    const element = document.createElement('video')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "wbr" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLElement} The newly created element
 */
export function wbr(attrs = {}, ...children) {
    const element = document.createElement('wbr')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "acronym" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLElement} The newly created element
 */
export function acronym(attrs = {}, ...children) {
    const element = document.createElement('acronym')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "applet" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLUnknownElement} The newly created element
 */
export function applet(attrs = {}, ...children) {
    const element = document.createElement('applet')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "basefont" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLElement} The newly created element
 */
export function basefont(attrs = {}, ...children) {
    const element = document.createElement('basefont')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "bgsound" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLUnknownElement} The newly created element
 */
export function bgsound(attrs = {}, ...children) {
    const element = document.createElement('bgsound')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "big" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLElement} The newly created element
 */
export function big(attrs = {}, ...children) {
    const element = document.createElement('big')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "blink" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLUnknownElement} The newly created element
 */
export function blink(attrs = {}, ...children) {
    const element = document.createElement('blink')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "center" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLElement} The newly created element
 */
export function center(attrs = {}, ...children) {
    const element = document.createElement('center')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "dir" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLDirectoryElement} The newly created element
 */
export function dir(attrs = {}, ...children) {
    const element = document.createElement('dir')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "font" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLFontElement} The newly created element
 */
export function font(attrs = {}, ...children) {
    const element = document.createElement('font')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "frame" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLFrameElement} The newly created element
 */
export function frame(attrs = {}, ...children) {
    const element = document.createElement('frame')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "frameset" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLFrameSetElement} The newly created element
 */
export function frameset(attrs = {}, ...children) {
    const element = document.createElement('frameset')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "isindex" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLUnknownElement} The newly created element
 */
export function isindex(attrs = {}, ...children) {
    const element = document.createElement('isindex')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "keygen" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLUnknownElement} The newly created element
 */
export function keygen(attrs = {}, ...children) {
    const element = document.createElement('keygen')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "listing" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLPreElement} The newly created element
 */
export function listing(attrs = {}, ...children) {
    const element = document.createElement('listing')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "marquee" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLMarqueeElement} The newly created element
 */
export function marquee(attrs = {}, ...children) {
    const element = document.createElement('marquee')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "menuitem" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLElement} The newly created element
 */
export function menuitem(attrs = {}, ...children) {
    const element = document.createElement('menuitem')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "multicol" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLUnknownElement} The newly created element
 */
export function multicol(attrs = {}, ...children) {
    const element = document.createElement('multicol')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "nextid" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLUnknownElement} The newly created element
 */
export function nextid(attrs = {}, ...children) {
    const element = document.createElement('nextid')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "nobr" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLElement} The newly created element
 */
export function nobr(attrs = {}, ...children) {
    const element = document.createElement('nobr')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "noembed" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLElement} The newly created element
 */
export function noembed(attrs = {}, ...children) {
    const element = document.createElement('noembed')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "noframes" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLElement} The newly created element
 */
export function noframes(attrs = {}, ...children) {
    const element = document.createElement('noframes')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "param" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLParamElement} The newly created element
 */
export function param(attrs = {}, ...children) {
    const element = document.createElement('param')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "plaintext" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLElement} The newly created element
 */
export function plaintext(attrs = {}, ...children) {
    const element = document.createElement('plaintext')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "rb" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLElement} The newly created element
 */
export function rb(attrs = {}, ...children) {
    const element = document.createElement('rb')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "rtc" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLElement} The newly created element
 */
export function rtc(attrs = {}, ...children) {
    const element = document.createElement('rtc')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "spacer" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLUnknownElement} The newly created element
 */
export function spacer(attrs = {}, ...children) {
    const element = document.createElement('spacer')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "strike" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLElement} The newly created element
 */
export function strike(attrs = {}, ...children) {
    const element = document.createElement('strike')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "tt" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLElement} The newly created element
 */
export function tt(attrs = {}, ...children) {
    const element = document.createElement('tt')
    addAttrsAndChildren(element, attrs, children)
    return element
}

/**
 * Creates a new "xmp" element
 * @param {Object.<string, string>} attrs - the attributes to add to the element
 * @param  {...(number | string | HTMLElement)} children [attributes={}] - the children to add to the element
 * @returns {HTMLPreElement} The newly created element
 */
export function xmp(attrs = {}, ...children) {
    const element = document.createElement('xmp')
    addAttrsAndChildren(element, attrs, children)
    return element
}
