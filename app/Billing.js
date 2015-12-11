'use strict'
import React, { Component, PropTypes } from 'react'

export default class Billing extends Component {
  render() {
    const { address, onSubmitOrder } = this.props
    return (
      <div>
        <h3>Billing</h3>
        <div>{address}</div>
        <input type="text" ref="address"/>
        <button onClick={()=>onSubmitOrder(this.refs.address.value)}>
          Submit
        </button>
      </div>
    )
  }
}

Billing.propTypes = {
  onSubmitOrder: PropTypes.func.isRequired,
  address: PropTypes.string.isRequired
}
