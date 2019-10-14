const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');

const app = express();

mongoose.connect('mongodb+srv://CinTeixeira:panquecanapanela231@cin-cluster-geuld.gcp.mongodb.net/semanaomnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// GET, POST, PUT, DELETE

//req.query = acessar query params (para filtros)
//req.params = acessar route params (para edição e delete)
//req.body = acessar o corpo da requisição (para criação, edição)

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);


app.listen(3333);

