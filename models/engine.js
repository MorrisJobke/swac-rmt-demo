var arkansas = require('arkansas')
module.exports = arkansas.Model.define('Engine', function() {
  this.use('rmt', { db: 'postgre' })
  this.property('power')
})