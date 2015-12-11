import React, { Component, PropTypes } from 'react'
import { increment, decrement, submitOrder } from './actions'
import Billing from './Billing'
import Errors from './Errors'


export default class App extends Component {
  render() {
    const { address, errors, dispatch } = this.props
    return (
      <div className="container">
        <Billing address={address}
                 onSubmitOrder={address => dispatch(submitOrder(address))}/>
        <Errors errors={errors}/>
      </div>
    )
  }
}
