  
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');


const authenticate = require('./auth/auth-middleware');
const authRouter = require('./auth/auth-router');
const storyRouter = require('./story/story-router');
const userRouter = require('./user/user-router');
const countryRouter = require('./country/country-router');
const communityRouter = require('./community/community-router');
const screeningRouter = require('./screening/screening-router');
const childRouter = require('./children/child-router')


const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(bodyParser.urlencoded({ extended: true }));


server.use('/api/', authRouter);
server.use('/api/', storyRouter);
server.use('/api/users', authenticate, userRouter);
server.use('/api/', countryRouter);
server.use('/api/', communityRouter);
server.use('/api/', screeningRouter);
server.use('/api/', childRouter);
module.exports = server;