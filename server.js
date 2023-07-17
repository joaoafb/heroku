const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Define a porta a ser usada pelo Heroku ou 3000 localmente

// Defina uma rota simples para imprimir a mensagem
app.get('/', (req, res) => {
    res.send('Servidor está ativo!'); // Resposta do servidor para qualquer requisição na raiz
});

// Inicie o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});