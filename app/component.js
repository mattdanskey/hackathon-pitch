import React, { Component, PropTypes } from 'react'
import { increment, decrement, submitOrder } from './actions'
import Billing from './Billing'
import Errors from './Errors'


export default class SuperComp extends Component {
  render() {
    const { cart, errors, dispatch } = this.props
    return (
      <div className="container">
        <Billing address={cart.address}
                 onSubmitOrder={address => dispatch(submitOrder(address))}/>
        <Errors errors={errors}/>
      </div>
    )
  }
}
