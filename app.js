var arkansas  = require('arkansas')

arkansas.get('/', function(app, done) {
  done.render('index')
})