const http = require('http');
const fs = require('fs');
const { Server } = require('socket.io')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(__dirname + '/index.html', (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading index.html');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    }
});

const io = new Server(server);


io.on('connection', (socket) =>{
    console.log("user connected");
    
    socket.on('send name', (user) => {
        io.emit('send name', user);
    });

    socket.on('send message', (chat) => {
        io.emit('send message', chat);
    });

    socket.on('disconnect', ()=> {
        console.log("user disconnected");
        
    })
});

const port =5000;
server.listen(port, ()=> {
    console.log(`server listening on port: ${port}`);
    
});