"use strict";
var component = require('./component');
var app = document.createElement('div');
require('./store.js')


document.body.appendChild(app);

app.appendChild(component());
let counter = 0;
if(module.hot){
  module.hot.accept('./component', function(){
    let newApp = require('./component')()
  });
}
