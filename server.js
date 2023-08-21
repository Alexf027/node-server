const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/tasks' && req.method === 'GET') {
        const tasks = [
            { id: 1, name: "Estudiar Nodejs", description: 'servidores', completed: false },
            { id: 2, name: "Realizar Tareas", description: 'de nodejs y express', completed: true },
            { id: 3, name: "Leer documentacion", description: 'despejo las dudas', completed: false }
        ];

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(tasks));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Ruta no encontrada');
    }
});

const port = 3000;

server.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
