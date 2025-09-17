const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res){
const method = req.method;
const path = req.url;
const log = `\n ${Date.now()}: ${method} - ${path}`;
fs.appendFileSync('log.txt', log, 'utf-8');
switch(method){
    case 'GET':
        switch(path){
            case '/':
                return res.writeHead(200).end(`Hello from the homepage`);
            case '/contact-us':
                return res.writeHead(200).end(`Hello from Ravii...\n Email: ravi131513@gmail.com\n Phone: +917991800580`);
            case '/tweet':
                return res.writeHead(200).end(`Tweet1 \n Tweet2 \n Tweet3`);
            default :
           return res.writeHead(404).end(`${req.url} is not found on the server`);
        }
        break;
    case 'POST':
        switch(path){
            case '/tweet':
                return res.writeHead(201).end(`Your tweet is created now.`);
            default :
           return res.writeHead(404).end(`${req.url} is not found on the server`);
        }
        break;
    }
    return res.writeHead(404).end(`${req.method} not allowed on the server...`);


});

server.listen(8080, ()=>console.log(`Server started running on port 8080`));