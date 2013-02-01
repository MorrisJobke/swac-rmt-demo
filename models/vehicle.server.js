var Engine = require('./engine')
  , Wheel  = require('./wheel')
  , async  = require('async')
require('./vehicle').extend(function() {
  this.beforeCreate(function(req, vehicle, callback) {
    async.parallel([
      function(done) {
        if (!vehicle.engine) return done()
        Engine.get(vehicle.engine, function(err, engine) {
          if (err) throw err
          vehicle.engine = engine
          done()
        })
      },
      function(done) {
        if (!vehicle.wheel) return done()
        Wheel.get(vehicle.wheel, function(err, wheel) {
          if (err) throw err
          vehicle.wheel = wheel
          done()
        })
      }
    ], function(err) {
      if (err) throw err
      callback()
    })
  })
})