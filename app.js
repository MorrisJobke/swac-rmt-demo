var arkansas  = require('arkansas')
  , Vehilce   = require('./models/vehicle')
  , Engine    = require('./models/engine')
  , Car       = require('./models/car')

var root = arkansas.get('/', function(app, done) {
  done.render('index')
})

var engine = root.get('/engines', function(app, done) {
  app.register('engines', arkansas.Observable.Array(Engine))
  Engine.list(function(err, engines) {
    if (err) throw err
    app.engines.reset(engines)
    done.render('engines')
  })
})

engine.post(function(app, done, params, body) {
  var engine = new Engine(body)
  app.engines.add(engine)
  engine.save(function() {
    done()
  })
})