'use strict'
import React, { Component } from 'react'
import { render } from 'react-dom'
import { compose, createStore } from 'redux'
import { connect, Provider } from 'react-redux'
import { createDevTools, persistState } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import SuperComp from './component'
// import store from './store'

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey='H' changePositionKey='Q'>
    <LogMonitor />
  </DockMonitor>
)

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

function select(state) {
  return { count: state.count }
}

let RootComponent = connect(select)(SuperComp)

let rootElement = document.createElement('div')
rootElement.id = 'SuperAppReactRoot'
document.body.appendChild(rootElement)

function makeHappen() {
  render(
    <div>
      <Provider store={store}>
        <div>
          <RootComponent />
          <DevTools />
        </div>
      </Provider>
    </div>,
    rootElement
  )
}

makeHappen()

/* todo: make this work with actually loading new code
   instead of just pretending to. */

// if(module.hot){
//   module.hot.accept('./component', function(){
//     makeHappen();
//   });
// }
