# document-make
The tool for making DOM elements quickly.

## Description
* This is currently under development 
* The dm function gives you a concise way of programmatically making DOM elements with attributes and children.

## Installation
    npm install document-make -g

## Usage
```javascript
const dm = require('document-make')

const hr = dm('hr')  // makes an hr element
const label = dm('label', {for: 'file-input'}, 'Choose a cool picture: ')  // makes a label with text
const input = dm('input', {type: 'file', id: 'file-input', name: 'file-input', accept: 'image/png'})  // makes a file input with an id and name
const div = dm('div', {}, label, input, hr, 'Great choice!')  // makes a div containing the previous elements and text
```