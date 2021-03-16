const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebSocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect('mongodb+srv://lucas:lucas@cluster0.uzzdy.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
});
//{ origin: 'http://localhost:3000'}
app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);









// Métodos HTTP: get, post, put, delete

// Tipos de parâmetros:

// Query Params: request.query (Usados para: filtros, ordenação, paginação, ...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)
