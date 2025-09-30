import * as dm from '../index.js'

const label = dm.label({ for: 'file-input' }, 'Choose a cool picture: ') // makes a label with text
const input = dm.input({ type: 'file', id: 'file-input', name: 'file-input', accept: 'image/png' }) // makes a file input with an id and name
const hr = dm.hr() // makes an hr element
const div = dm.div({}, label, input, hr, 'Great choice!') // makes a div containing the previous elements and text

document.body.appendChild(div)
