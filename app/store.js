import { createStore, combineReducers } from 'redux'
import { compose } from 'redux'
import { persistState } from 'redux-devtools'
import DevTools from './DevTools'
import { counter } from './reducers'

export default function() {
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

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = combineReducers(require('./reducers'))
      store.replaceReducer(nextReducer)
    })
  }
  return store
}
