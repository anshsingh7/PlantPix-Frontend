const express = require('express');
const {registerController, loginController } = require('../controller/authController');

const routes = express.Router();

routes.post(`/register`, registerController);
routes.post(`/login`, loginController);

module.exports = routes;