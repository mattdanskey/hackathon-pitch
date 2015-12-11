import React, { Component, PropTypes } from 'react'
import { increment, decrement } from './actions'

export default class SuperComp extends Component {
  render() {
    const { count, dispatch } = this.props
    return (
      <div>
        <h1>We are alive!</h1>
        <marquee>
          <h2>Marquees still work</h2>
        </marquee>
        <button onClick={() => dispatch(decrement())}>Press me!</button>
        <div>{count}</div>
      </div>
    )
  }
}
