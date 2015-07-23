import React from 'react'

export class Test extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: props.title
    }
  }
  render () {
    return (
      <div>{this.state.title}</div>
    )
  }
}
Test.propTypes = { title: React.PropTypes.string.required }
Test.defaultProps = {
  title:'titulo'
}