var arkansas  = require('arkansas')
  , Vehilce   = require('./models/vehicle')
  , Engine    = require('./models/engine')
  , Car       = require('./models/car')

var root = arkansas.get('/', function(app, done) {
  app.register('engines', arkansas.Observable.Array(Engine))
  Engine.list(function(err, engines) {
    if (err) throw err
    app.engines.reset(engines)
    done.render('index')
  })
})

var engines = root.get('/engines', function(app, done) {
  done.render('engines')
})

engines.post(function(app, done, params, body) {
  var engine = new Engine(body)
  app.engines.add(engine)
  engine.save(function() {
    done()
  })
})

var vehicles = root.get('/vehicles', function(app, done) {
  app.register('vehicles', arkansas.Observable.Array(Vehilce))
  Vehilce.list(function(err, vehicles) {
    if (err) throw err
    app.vehicles.reset(vehicles)
    done.render('vehicles')
  })
})

vehicles.post(function(app, done, params, body) {
  var vehicle = new Vehilce(body)
  app.vehicles.add(vehicle)
  vehicle.save(function() {
    done()
  })
})

var cars = root.get('/cars', function(app, done) {
  app.register('cars', arkansas.Observable.Array(Car))
  Car.list(function(err, cars) {
    if (err) throw err
    app.cars.reset(cars)
    done.render('cars')
  })
})

cars.post(function(app, done, params, body) {
  var car = new Car(body)
  car.manufacturer = body.manufacturer
  app.cars.add(car)
  car.save(function() {
    done()
  })
})