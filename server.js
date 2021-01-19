require('dotenv').config();
const config = require('./config');
const express = require('express');
const serveStatic = require('serve-static');
const { mongooseErrorHandler, renderReactApp } = require('./lib/middlewares');
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const port = process.env.PORT || config.PORT;

async function start() {
    await mongoose.connect(config.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });

    app.set('trust proxy', true);
    app.use(serveStatic('client/build'));
    app.use(cookieParser());
    app.use(express.json());
    app.use('/', require('./routes/game'),require('./routes/auth'));
    app.use('/*', renderReactApp);

    app.use(mongooseErrorHandler);

    app.listen(port, () => {
        console.log(`Server started at http://localhost:${port}`);
    })
}

start();

