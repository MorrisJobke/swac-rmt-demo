var swac   = require('swac')
  , Engine = require('./engine')
module.exports = swac.Model.define('Vehicle', function() {
  this.use('rmt', { db: 'postgre' }, function() {
    this.composes(Engine)
  })
  this.property('manufacturer')
})