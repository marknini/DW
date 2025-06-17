// Importa o Express
const express = require('express');

// Cria uma instância do Express
const app = express();

// Define a rota raiz que responderá com "Hello World"
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
