import { createStore } from 'redux'
import { compose } from 'redux'
import { persistState } from 'redux-devtools'
import DevTools from './DevTools'
import reducers from './reducers'

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

  let store = finalCreateStore(reducers)

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers')
      store.replaceReducer(nextReducer)
    })
  }
  return store
}
