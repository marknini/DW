// Importa o módulo HTTP nativo do Node.js
const http = require('http');

// Cria um servidor HTTP
const server = http.createServer((req, res) => {
    // Define o tipo de resposta como texto
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // Responde com "Hello World" quando a raiz for requisitada
    if (req.url === '/') {
        res.end('Hello World');
    } else {
        res.end('Página não encontrada');
    }
});

// Inicia o servidor na porta 3000
server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
