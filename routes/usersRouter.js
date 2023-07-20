const {ipMiddleware} = require("../middlewares/ipMiddleware");

const express = require('express');
const usersController = require('../controllers/usersController');

const usersRouter = express.Router();

usersRouter.get('/', ipMiddleware, (request, response) => {
    const users = usersController.getUsers();
    const dataFromTxt = usersController.readDataFromTxt();
    response.send(users);
});

usersRouter.get('/:name', ipMiddleware, (request, response) => {
    response.send(`hello world ${request.params.name}`);
});

usersRouter.post('/', (request, response) => {
    const body = request.body;
    console.log('REQUEST', body);

    response.send(body);
});

module.exports = {usersRouter};