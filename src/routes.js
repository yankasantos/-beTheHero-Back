const express = require("express");


const ongController = require("./controllers/OngController");
const incidentsController = require("./controllers/IncidentController");

const routes = express.Router();

routes.get('/ongs', ongController.index);

routes.post('/ongs', ongController.create);


routes.get('/incidents', incidentsController.index);

routes.post('/incidents', incidentsController.create);


module.exports = routes;