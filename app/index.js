'use strict'
import React, { Component } from 'react'
import { render } from 'react-dom'
import { compose, createStore } from 'redux'
import { connect, Provider } from 'react-redux'
import { createDevTools, persistState } from 'redux-devtools'
import DevTools from './DevTools'
import Root from './component'
import storeFactory from './store'
import './assets/stylez.scss'


function select(state) {
  return state
}

let RootComponent = connect(select)(Root)

let rootElement = document.createElement('div')
rootElement.id = 'SuperAppReactRoot'
document.body.appendChild(rootElement)

let store = storeFactory()
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
