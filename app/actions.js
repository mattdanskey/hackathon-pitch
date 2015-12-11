'use strict'
function increment() {
  return { type: 'INCREMENT' }
}

function decrement() {
  return { type: 'DECREMENT' }
}

function submitOrder(address) {
  let valid = validate(address)
  if (valid) {
    return { type: 'SUBMIT_ORDER', address: address}
  }
  return { type: 'ADD_ERROR', error: 'P.O. Box not available for deliveries'}
}

function validate(address) {
  return !/box/.test(address)
}

export { increment, decrement, submitOrder }
