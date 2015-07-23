import React from 'react'
import _ from 'highland'
// import xhr from 'xhr;'

var Search
var Result
export class SearchBox extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      initialCount: props.initialCount,
      id: 'searchbox',
      about: props.about
    }
  }
  // on load fire  event listener for search input
  componentDidMount () {
    let self = this
    // code from http://highlandjs.org/#events
    let text = _('keyup', $('#search'))
      .map(getValue)
      .debounce(1000)
      .latest()
      

    text
      .map(function (x) {
        if(x === self.props.response) return (null, _.nil)
        self.props.response = x
        return x
      })
      .map(self._fetch)
      .map(function (res) {
          return self.setState({
            response: res  
          })
      }).done(() => {
        console.log('done');
      })
      // .map(function (x) {
      //   console.log(x);
      // }).done(() => {
      //   console.log('done');
      // })
      
      // .map(self._fetch)
      // .errors(function (err) {
      //     // handle errors
      //     console.warn('error', err)
      // })
      // .toArray(function(x) {

      // })
      // .done(function () {
      //   console.log(self.state);
      // })
      // .map(function (res) {
      //   debugger
      //   self.setState({
      //     response: res  
      //   })
      //   console.log(self)
      // })
  }
  _fetch (item) {
    // return fetch('https://api.github.com/users/' + e)
    return _(fetch('/users/' + item)
      .then(response => response.json())
      .then(user => user.login)
      .then(name => {
          return name
      })
      .catch((err) => {
        return err
      }))
  }
  render () {
    return <Search {...this.state} />
  }
}

function status(response) {  
  if (response.status >= 200 && response.status < 300) {  
    return Promise.resolve(response)  
  } else {  
    return Promise.reject(new Error(response.statusText))  
  }  
}
function getValue(e) {
  return e.target.value
}

SearchBox.propTypes = { initialCount: React.PropTypes.number }
SearchBox.defaultProps = { initialCount: 0 }

Search = class extends React.Component {
  render () {
    return (
      <div> 
      <input type='text' placeholder='search' id='search' />
      <span>{this.props.response}</span>
      </div>
    )
  }
}
Search.propTypes = { response: React.PropTypes.string }
Search.defaultProps = { response: '' }


