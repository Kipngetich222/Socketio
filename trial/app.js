const express = require('express'); 
const app = express();
var http = require('http').Server(app);

app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendFile('/index.html'); 
});

http.listen(3000, function(){
    console.log("listening on 3000");
    
});