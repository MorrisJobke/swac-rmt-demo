var swac   = require('swac')
  , Engine = require('./engine')
  , Wheel = require('./wheel')
module.exports = swac.Model.define('Vehicle', function() {
  this.use('rmt', { db: 'postgre' }, function() {
    this.composes(Engine)
    this.composes(Wheel)
  })
  this.property('manufacturer')
})