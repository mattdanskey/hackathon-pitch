'use strict'
const initialState = {
  address: 'address 123',
  errors: []
}

function cart(state = initialState, action) {
  switch (action.type) {
  case 'SUBMIT_ORDER':
    return Object.assign({}, state, { address: action.address, errors: [] })
  case 'ADD_ERROR':
    return Object.assign({}, state, { errors: [...state, action.error] })
  case 'CLEAR_ERRORS':
    return Object.assign({}, state, { errors: []})
  default:
    return state
  }
}

export default cart
