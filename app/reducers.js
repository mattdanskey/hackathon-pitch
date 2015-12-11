'use strict'
import { combineReducers } from 'redux'

function cart(state = {address: 'address 123'}, action) {
  switch (action.type) {
  case 'SUBMIT_ORDER':
    return { address: action.address }
  default:
    return state
  }
}

function errors(state = ['error'], action) {
  switch (action.type) {
  case 'ADD_ERROR':
    return [...state, action.error]
  case 'CLEAR':
    return []
  default:
    return state
  }
}

const reducers = combineReducers(
  {
    cart,
    errors
  })

export default reducers
