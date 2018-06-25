const express = require('express');
const bodyParser = require('body-parser');
const login = require('./rotas/usuarios');
const auth = require('./rotas/auth');

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/login', login);
app.use('/api/auth', auth);

app.get("/smiley", (req, res) => res.json({"Hello World": "✈️"}))

app.listen(port, () => console.info(` 🌎 => Servidor rodando na porta ${port}`))

// NOTE: Developed by Mateus Souza // 24/06/2018
