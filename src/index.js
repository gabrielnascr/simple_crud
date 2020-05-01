const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const morgan = require('morgan');

const router = require('./routes')

require('./database/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

app.use(router)

app.listen(3031, () => {
    console.log("[API] Servidor iniciado com SUCESSO!")
});