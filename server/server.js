require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.use(require('./routes/usuario'));

// parse application/json
app.use(bodyParser.json())

mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
    (err, res) => {
        console.log('Base de datos ONLINE');
    });


app.listen(process.env.PORT, () => {
    console.log(`Escuchando Peticiones en el puerto ${process.env.PORT}`);
});