'use strict'
function increment() {
  return { type: 'INCREMENT' }
}

function decrement() {
  return { type: 'DECREMENT' }
}

function submitOrder(address) {
  return { type: 'SUBMIT_ORDER', address: address}
}

export { increment, decrement, submitOrder }
