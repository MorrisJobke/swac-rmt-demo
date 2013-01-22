var Engine = require('./engine')
require('./vehicle').extend(function() {
  this.beforeCreate(function(req, vehicle, callback) {
    if (!vehicle.engine) return callback()
    Engine.get(vehicle.engine, function(err, engine) {
      if (err) throw err
      vehicle.engine = engine
      callback()
    })
  })
})