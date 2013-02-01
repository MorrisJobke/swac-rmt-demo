var swac  = require('swac')
  , Vehilce   = require('./models/vehicle')
  , Engine    = require('./models/engine')
  , Wheel     = require('./models/wheel')
  , Car       = require('./models/car')

var root = swac.get('/', function(app, done) {
  app.register('engines', swac.Observable.Array(Engine))
  app.register('wheels', swac.Observable.Array(Wheel))
  Engine.list(function(err, engines) {
    if (err) throw err
    app.engines.reset(engines)
    Wheel.list(function(err, wheels) {
      if (err) throw err
      app.wheels.reset(wheels)
      done.render('index')
    })
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

var wheels = root.get('/wheels', function(app, done) {
  done.render('wheels')
})

wheels.post(function(app, done, params, body) {
  var wheel = new Wheel(body)
  app.wheels.add(wheel)
  wheel.save(function() {
    done()
  })
})

var vehicles = root.get('/vehicles', function(app, done) {
  app.register('vehicles', swac.Observable.Array(Vehilce))
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
  app.register('cars', swac.Observable.Array(Car))
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