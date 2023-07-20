const bodyParser = require('body-parser');
const express = require('express');
const {usersRouter} = require('./routes/usersRouter');

const application = express();
application.use(bodyParser.json());
application.use('/users', usersRouter);

const port = 3001;

application.listen(port, () => {
    console.log(`application has started on port ${port}`);
});

