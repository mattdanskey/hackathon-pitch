"use strict";
var component = require('./component');
var app = document.createElement('div');

console.log("yea woot yknow")

document.body.appendChild(app);

app.appendChild(component());
let counter = 0;
if(module.hot){
  module.hot.accept('./component', function(){
    let newApp = require('./component')()
    //Why does the below line do nothing?
    document.body.lastChild.innerHTML = newApp.innerHTML
    console.log('ACCEPT MY THANKS', counter)
    counter++
  });

  // module.hot.dispose(function(){
  //
  // });
}
