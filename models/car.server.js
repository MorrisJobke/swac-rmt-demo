var Engine = require('./engine')
require('./car').extend(function() {
  this.beforeCreate(function(req, car, callback) {
    if (!car.engine) return callback()
    Engine.get(car.engine, function(err, engine) {
      if (err) throw err
      car.engine = engine
      callback()
    })
  })
})