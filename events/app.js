const express = require('express');
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendFile('/index.html')
});

// io.on('connection', function (socket) {
//     console.log("a user connected");
    
//     //sending a message after 4s
//     setTimeout(function () {
//         socket.send("sent message after 4s");
//     }, 4000);

//     socket.on('disconnect', function () {
//         console.log('a user disconncted');
        
//     });
// });

app.listen(3000, function(){
    console.log("listening on port 3000");
    
})