const fastify = require("fastify")();
const path = require("path");

fastify.register(require("fastify-cors"), {
  origin: true,
});
fastify.register(require('@fastify/multipart'))
fastify.register(require('@fastify/formbody'))
fastify.get("/", function (req, reply) {
  reply.send("hello root");
});
fastify.register(require("./routes/opd"), { prefix: "/api/opd" });
module.exports = fastify;
