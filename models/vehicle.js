var arkansas = require('arkansas')
  , Engine   = require('./engine')
module.exports = arkansas.Model.define('Vehicle', function() {
  this.use('rmt', { db: 'postgre' }, function() {
    this.composes(Engine)
  })
  this.property('manufacturer')
})