# dm

_document-make_

A collection of typed functions to create elements with attributes and children

## Installation

    npm i document-make

## Usage

```javascript
import * as dm from 'document-make'

const label = dm.label({ for: 'file-input' }, 'Choose a cool picture: ') // makes a label with text
const input = dm.input({ type: 'file', id: 'file-input', name: 'file-input', accept: 'image/png' }) // makes a file input with an id and name
const hr = dm.hr() // makes an hr element
const div = dm.div({}, label, input, hr, 'Great choice!') // makes a div containing the previous elements and text
```

## Editing

If you fork this, you should make your changes to builder.mjs and run `npm run build` to regenerate index.js  
It is recommended to install [es6-string-html](https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html) if you are going to edit the source code

## To-do

-   Add test to check formatting of generated code
