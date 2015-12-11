'use strict'
import React from 'react'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'
import { createDevTools } from 'redux-devtools'

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey='H' changePositionKey='Q'>
    <LogMonitor />
  </DockMonitor>
)

export default DevTools
