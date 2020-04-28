const express = require("express");


const ongController = require("./controllers/OngController");
const incidentsController = require("./controllers/IncidentController");
const profileController = require("./controllers/ProfileController");

const routes = express.Router();

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);
// routes.delete('/ongs/:id', ongController.delete);

routes.get('/incidents', incidentsController.index);
routes.post('/incidents', incidentsController.create);
routes.delete('/incidents/:id', incidentsController.delete);


routes.get('/profile', profileController.indexProfile);

module.exports = routes;