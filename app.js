var swac      = require('swac')
// Compatibility-related Workaround
var API       = require('./node_modules/swac/lib/adapter/ajax').API
API.prototype.createModel = function(data) {
  var instance = new this.model()
  Object.keys(data).forEach(function(key) {
    instance[key] = data[key]
  })
  instance.isNew = false
  return instance
}

var Vehicle   = require('./models/vehicle')
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

engines.delete('/:id', function(app, done, params) {
  var engine = app.engines.find(params.id)
  engine.destroy(function() {
    done.redirect('/engines', { silent: true })
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

wheels.delete('/:id', function(app, done, params) {
  var wheel = app.wheels.find(params.id)
  wheel.destroy(function() {
    done.redirect('/wheels', { silent: true })
  })
})

var vehicles = root.get('/vehicles', function(app, done) {
  app.register('vehicles', swac.Observable.Array(Vehicle))
  Vehicle.list(function(err, vehicles) {
    if (err) throw err
    app.vehicles.reset(vehicles)
    done.render('vehicles')
  })
})

vehicles.post(function(app, done, params, body) {
  Vehicle.post(body, function(err, vehicle) {
    if (err) throw err
    app.vehicles.push(vehicle)
    done()
  })
})

vehicles.delete('/:id', function(app, done, params) {
  var vehicle = app.vehicles.find(params.id)
  vehicle.destroy(function() {
    done.redirect('/vehicles', { silent: true })
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
  Car.post(body, function(err, car) {
    if (err) throw err
    app.cars.push(car)
    done()
  })
})

cars.delete('/:id', function(app, done, params) {
  var car = app.cars.find(params.id)
  car.destroy(function() {
    done.redirect('/cars', { silent: true })
  })
})