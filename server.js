require('dotenv').config();
const config = require('config');
const express = require('express');
const serveStatic = require('serve-static');
const { mongooseErrorHandler, renderReactApp, checkToken } = require('./lib/middlewares');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || config.get('PORT');

async function start() {
    await mongoose.connect(config.get('DB_URL'), config.get('MONGOOSE_OPT'));

    app.use(cors());
    app.set('trust proxy', true);
    app.use(serveStatic('client/build'));
    app.use(express.json());
    app.use(checkToken);
    app.use('/', require('./routes/game'),require('./routes/auth'));
    app.use('/*', renderReactApp);

    app.use(mongooseErrorHandler);

    app.listen(port, () => {
        console.log(`Server started at http://localhost:${port}`);
    })
}

start();

