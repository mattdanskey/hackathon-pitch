'use strict'
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

export { counter }
