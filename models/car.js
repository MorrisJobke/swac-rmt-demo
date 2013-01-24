var swac        = require('swac')
  , Vehilce     = require('./vehicle')
  , initialized = false
module.exports  = swac.Model.define('Car', function() {
  this.use('rmt', { db: 'postgre' }, function() {
    this.extends('is-a', Vehilce)
  })
  this.property('color')
})