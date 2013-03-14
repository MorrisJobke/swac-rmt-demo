var swac        = require('swac')
  , Vehicle     = require('./vehicle')
  , initialized = false
module.exports  = swac.Model.define('Car', function() {
  this.use('rmt', { db: 'postgre' }, function() {
    this.extends('is-a', Vehicle)
  })
  this.property('color')
})