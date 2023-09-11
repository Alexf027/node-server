const http = require('http');
const chalk = require('chalk');
const host = 'localhost';
const port = 8080; 

const servidor = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    const mensaje = JSON.stringify({ message: "Hola 👋, Soy Alexander Florez"})
    res.end(mensaje)
});

servidor.listen(port, () => {
    console.log(chalk.green(`Servidor ON en http://${host}:${port}`))
});
