const bodyParser = require('body-parser')
const express = require('express');

const application = express();
application.use(bodyParser.json());

const port = 3001;

application.listen(port, () => {
    console.log(`application has started on port ${port}`);
});

application.get('/users', (request, response) => {
    console.log("REQUEST", request.query);

    response.send('hello world');
    //response.render(`<div></div>`);
    //response.status(200);
    //response.json({hello: 'world'});
});

application.post('/users', (request, response) => {
    const body = request.body;
    console.log('REQUEST', body);

    response.send(body);
});