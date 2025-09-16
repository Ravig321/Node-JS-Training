const http = require('http');

const server = http.createServer(function(req, res){
     // console.log(`I got an incorming request at ${Date.now()}`);
     // console.log(req.headers);
     // console.log(req.method);
     // res.writeHead(200),
     // res.end('Thank you')

     switch(req.url){
     case '/' :
     res.writeHead(200)
     return res.end('Hompage');
     
     case '/contact':
     res.writeHead(200)
     return res.end(`You can't contact me :)`);

     case '/about':
     res.writeHead(200)
     return res.end(`I'm a developer`);

     default:
     res.writeHead(404)
     return res.end(`Kidhar gya... Abhi toh yahi tha...`);

     }
});

server.listen(8000, ()=>console.log('Server strated running on port 8000'))