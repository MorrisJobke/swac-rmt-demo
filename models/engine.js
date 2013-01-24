var swac = require('swac')
module.exports = swac.Model.define('Engine', function() {
  this.use('rmt', { db: 'postgre' })
  this.property('power')
})