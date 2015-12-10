'use strict'
// react
import React, { Component } from 'react'
import { render } from 'react-dom'
// redux-devtools
import { compose, createStore } from 'redux'
import { connect, Provider } from 'react-redux'
import { createDevTools, persistState } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'

import SuperComp from './component'


// redux stuffs
function counter(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1
  case 'DECREMENT':
    return state - 1
  default:
    return state
  }
}

const store = createStore(counter)
const DevTools = createDevTools(
  <LogMonitor />
)

class Root extends Component {
  render() {
    return (
        <div>
          <SuperComp />
          <DevTools />
        </div>
    )
  }
}

function select(state) {
  return { count: state }
}

let RootComponent = connect(select)(Root)

let rootElement = document.createElement('div')
rootElement.id = 'SuperAppReactRoot'
document.body.appendChild(rootElement)

function makeHappen() {
  render(
    <Provider store={store}>
      <RootComponent />
    </Provider>,
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
