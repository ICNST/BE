const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');


const authenticate = require('./auth/auth-middleware');
const authRouter = require('./auth/auth-router');
const userRouter = require('./user/user-router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use('/api/', authRouter);
server.use('/api/users', authenticate, userRouter);

module.exports = server;
