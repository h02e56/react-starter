# react-starter-es6

[![build status](https://travis-ci.org/h02e56/react-starter.svg?branch=master)](http://travis-ci.org/h02e56/
[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

bare-bones [react](https://facebook.github.io/react/) starter
using [reactify](https://npmjs.com/package/reactify) for jsx
using [babelify](https://github.com/babel/babelify) for [Babel](https://babeljs.io)
under [browserify](http://browserify.org)/[watchify](https://npmjs.com/package/watchify)
with [npm run scripts](http://substack.net/task_automation_with_npm_run)
with [browserSync](http://www.browsersync.io) for live reload
with [standard](https://github.com/feross/standard) for linting

[view the starter demo](http://substack.neocities.org/react_starter.html)

# quick start

```
$ npm install
$ npm run dev
```

# commands

* `npm run build` - build for production
* `npm run dev` - start dev server with auto realod and automatically recompile during development
* `npm start` - start a static development web server
* `npm test` - code style revision

# starter code

``` js
var React = require('react')
var App = React.createClass({
  getInitialState: function () { return { n: 0 } },
  render: function () {
    return <div>
      <h1>clicked {this.state.n} times</h1>
      <button onClick={this.handleClick}>click me!</button>
    </div>
  },
  handleClick: function () {
    this.setState({ n: this.state.n + 1 })
  }
})
React.render(<App />, document.querySelector('#content'))
```

# contributing

If you like what you see, but want to add something more, fork this repo and add
your additional feature to the name of the fork. Try to be specific with the
name of your fork, listing the technologies used plus what features the fork
adds.

# variations

Check out the [list of forks](https://github.com/substack/react-starter/network/members)
to see how other people have customized this starter repo.
