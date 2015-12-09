var component = require('./component');
var app = document.createElement('div');

console.log("yea woot")

document.body.appendChild(app);

app.appendChild(component());

if(module.hot){
  module.hot.accept();

  module.hot.dispose(function(){
    while(document.body.hasChildNodes()) {
      document.body.removeChild(document.body.lastChild);
    }
  })
}
