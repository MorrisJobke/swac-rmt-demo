var arkansas    = require('arkansas')
  , Vehilce     = require('./vehicle')
  , initialized = false
module.exports  = arkansas.Model.define('Car', function() {
  this.use('rmt', { db: 'postgre' }, function() {
    this.extends('is-a', Vehilce)
  })
  this.property('color')
})