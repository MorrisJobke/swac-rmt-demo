var Engine = require('./engine')
  , Wheel  = require('./wheel')
require('./vehicle').extend(function() {
  this.beforeCreate(function(req, vehicle, callback) {
    if (!vehicle.engine || !vehicle.wheel) return callback()
    Engine.get(vehicle.engine, function(err, engine) {
      if (err) throw err
      vehicle.engine = engine
      Wheel.get(vehicle.wheel, function(err, wheel) {
        if (err) throw err
        vehicle.wheel = wheel
        callback()
      })
    })
  })
})