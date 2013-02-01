var swac = require('swac')
module.exports = swac.Model.define('Wheel', function() {
  this.use('rmt', { db: 'postgre' })
  this.property('diameter')
})