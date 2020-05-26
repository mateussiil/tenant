const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');
const passport = require('passport');

const UserController = require('./controller/UserController');
const HouseController= require('./controller/HouseController');
const ArquiveController = require('./controller/ArquiveController');
const SessionController = require('./controller/SessionController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.post('/imoveis', HouseController.store);
routes.get('/imoveis', HouseController.index);
routes.get('/imoveis/:id', HouseController.show);
routes.delete('/imoveis/:id', HouseController.destroy);
routes.put('/imoveis/:id', HouseController.update);

routes.post('/arquivos', multer(multerConfig).single("file"), ArquiveController.store);
routes.get('/arquivos', ArquiveController.index);
routes.delete('/arquivos/:id', ArquiveController.destroy);

routes.post('/session', SessionController.store);

module.exports = routes;