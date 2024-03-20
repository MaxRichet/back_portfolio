const express = require('express');

const hostname = '0.0.0.0';
const port = 3000;

const server = express();

server.use(express.urlencoded());
server.use(express.json());

const aboutRoute = require('./api/routes/aboutRoute.js');
const projectRoute = require('./api/routes/projectRoute.js');

aboutRoute(server);
projectRoute(server);

server.listen(port, hostname, () => {
    console.log(`Serveur qui toune sur le port ${port}`)
});