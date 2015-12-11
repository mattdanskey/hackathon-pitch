import { createStore } from 'redux'
import { compose } from 'redux'
import { persistState } from 'redux-devtools'
import DevTools from './DevTools'

function counter(state = {count: 0}, action) {
  switch (action.type) {
  case 'INCREMENT':
    return { count: state.count + 1 }
  case 'DECREMENT':
    return { count: state.count - 1 }
  default:
    return state
  }
}

const finalCreateStore = compose(
  // applyMiddleware(thunk),
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&]+)\b/
    )
  )
)(createStore)

let store = finalCreateStore(counter)

store.subscribe(() => // todo: understand why it logs every second
  console.log(store.getState())
)

export default store
