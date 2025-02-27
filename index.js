/**
 * Creates a DOM element with the specified tag, attributes, and children.
 *
 * @param {string} tag - The type of element to create (e.g., 'div', 'span').
 * @param {Object.<any, string>} [attributes={}] - An object containing key-value pairs of attributes to set on the element.
 * @param {...(string|HTMLElement)} children - The children to append to the created element. Can be strings or DOM elements.
 * @returns {HTMLElement} The created DOM element.
 */
export default function dm(tag, attributes = {}, ...children) {
    const element = document.createElement(tag)

    for (const [key, value] of Object.entries(attributes)) {
        element.setAttribute(key, value)
    }

    for (const child of children) {
        if (typeof child === 'string') {
            element.appendChild(document.createTextNode(child))
        } else if (child) {
            element.appendChild(child)
        }
    }

    return element
}
