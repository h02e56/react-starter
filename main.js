import * as patterns from './lib/patterns'
import {Selector} from './lib/selector'
import {Test} from './lib/test'
// import {SearchBox} from './lib/searchbox'
import React from 'react'

// React.render(<SearchBox about="search user" />, document.querySelector('#searchbox'))
// React.render(<Selector about="users that follow me" />, document.querySelector('.js-selectors'))
React.render(<Test title="users that follow me" />, document.querySelector('#test'))
console.log('sads');
