import React, { Component, PropTypes } from 'react'
import { increment, decrement, submitOrder } from './actions'
import Billing from './Billing'
import ImageChooser from './ImageChooser'


export default class SuperComp extends Component {
  render() {
    const { counter, cart, dispatch } = this.props
    return (
      <div>
        <h1>We are alive!</h1>
        <marquee>
          <h2>Marquees still work {cart.address}</h2>
        </marquee>
        <button onClick={() => dispatch(decrement())}>Press me!</button>
        <div>{counter.count}</div>
        <Billing address={cart.address}
                 onSubmitOrder={address => dispatch(submitOrder(address))}/>
        <ImageChooser/>
      </div>
    )
  }
}
