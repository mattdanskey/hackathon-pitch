'use strict'
import React, { Component, PropTypes } from 'react'

export default class Errors extends Component {
  render() {
    const { errors } = this.props
    return (
      <div className="errors">
        {errors.map((error, index) => <span key={index}>{error}</span>)}
      </div>
    )
  }
}

Errors.propTypes = {
  errors: PropTypes.array.isRequired
}
