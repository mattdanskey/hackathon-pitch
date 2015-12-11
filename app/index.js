'use strict'
import React, { Component } from 'react'
import { render } from 'react-dom'
import { compose, createStore } from 'redux'
import { connect, Provider } from 'react-redux'
import { createDevTools, persistState } from 'redux-devtools'

import DevTools from './DevTools'
import Root from './component'
import store from './store'

function select(state) {
  return { count: state.count }
}

let RootComponent = connect(select)(Root)

let rootElement = document.createElement('div')
rootElement.id = 'SuperAppReactRoot'
document.body.appendChild(rootElement)

function init() {
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

init()
