'use strict'
import { combineReducers } from 'redux'

function counter(state = {count: 0}, action) {
  switch (action.type) {
  case 'INCREMENT':
    return { count: state.count + 2 }
  case 'DECREMENT':
    return { count: state.count - 3 }
  default:
    return state
  }
}

function cart(state = {address: 'address 123'}, action) {
  switch (action.type) {
  case 'SUBMIT_ORDER':
    return { address: action.address }
  default:
    return state
  }
}

const reducers = combineReducers(
  {
    counter,
    cart
  })

export default reducers
