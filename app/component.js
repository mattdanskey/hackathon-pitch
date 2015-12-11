import React, { Component, PropTypes } from 'react'
import incrementa from './actions'

export default class SuperComp extends Component {
  render() {
    const { count, dispatch } = this.props
    const increment = this.increment
    return (
      <div>
        <h1>We are alive!</h1>
        <marquee>
          <h2>Marquees still work</h2>
        </marquee>
        <button onClick={() => dispatch(incrementa())}>Press me!</button>
        <div>{count}</div>
        <br/>
        <br/>
      </div>
    )
  }
}
