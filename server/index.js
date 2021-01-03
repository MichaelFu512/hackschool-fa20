const express = require('express');
const config = require('./config');
const router = require('./api');
const server = express();
const cors = require('cors');

server.use(cors());
server.use(express.urlencoded({ extended: true}));
server.use('/api', router);

server.listen(config.PORT, () => {
    console.log('Server started on port ' + config.PORT);
});