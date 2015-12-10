"use strict";
import React from 'react'
import {render} from 'react-dom'

import SuperComp from './component'
require('./store.js')

let rootElement = document.createElement('div')
rootElement.id = "SuperAppReactRoot"
document.body.appendChild(rootElement)

function makeHappen () {
  render(<SuperComp/>, rootElement)
}

makeHappen();

/* todo: make this work with actually loading new code
   instead of just pretending to. */
   
// if(module.hot){
//   module.hot.accept('./component', function(){
//     makeHappen();
//   });
// }
