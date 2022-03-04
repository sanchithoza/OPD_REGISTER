
const fastify = require("fastify")();
const path = require('path')

// first plugin
fastify.register(require('fastify-cors'), {
    origin: true
})
fastify.register(require('fastify-multipart'))
fastify.register(require('fastify-formbody'))


    fastify.get('/', function(req, reply) {
      //reply.sendFile(__dirname+'/client/index.html') // serving path.join(__dirname, 'public', 'myHtml.html') directly
      reply.send("hello root")
  })
    //database connection
    //routes
fastify.register(require('./routes/opd'), { prefix: '/api/opd' });  

// Declare a route
//Funtion To run the server
module.exports = fastify