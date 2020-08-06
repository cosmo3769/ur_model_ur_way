//packages required
const express = require('express');
var path = require('path');
const http = require('http');

//hostname and port
const hostname = 'localhost';
const port = 3000;

//express set up
const app = express();

//
// app.get('/',function(req,res){
//     res.sendFile(__dirname + '/static'+'/classify.html');
// });

// app.use(express.static(path.join(__dirname+'/classify.html')));

//server setup with http
const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});