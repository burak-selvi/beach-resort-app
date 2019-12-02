import React, { Component } from 'react'

export default class SingleRoom extends Component {
  render() {
    console.log(this.props.match.params.detail);
    return (
      <div>
        hello from single room page
      </div>
    )
  }
}
