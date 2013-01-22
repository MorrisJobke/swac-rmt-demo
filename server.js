var arkansas = require('arkansas/server')
  , domain = require('domain')
  , app = arkansas.app
  , express = arkansas.express
 
app.configure(function() {
  app.enable('trust proxy')
  app.set('port', process.env.PORT || 3000)
  app.set('views', __dirname + '/views')
  app.use(express.favicon())
  app.use(require('less-middleware')({ src: __dirname + '/assets' }))
  app.use(express.static(__dirname + '/assets'))
  app.use(express.bodyParser())
  app.use(express.methodOverride())
  app.use(arkansas.middleware)
})

app.configure('development', function() {
  app.use(express.errorHandler())
  app.use(express.logger('dev'))
})

arkansas.area(__dirname + '/app', { layout: 'layout' })
var server = module.exports = require('http').createServer(app)

setTimeout(function() {
  server.listen(app.get('port'), function() {
    console.log("Express server listening on port " + app.get('port'))
  })
}, 1000)
