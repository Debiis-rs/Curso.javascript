const http = require ('node:http');

const hostname= '127.0.0.1';
const port = 3000;

const server  = http.createServer((req, res) => {
    if(req.method === 'GET' && req.url === '/'){
       res.statusCode = 200;
       res.setHeader('Content-Type', 'text/plain' );
       res.end('Home\n');

    }else if ( req.method === 'GET' &&  req.url === '/sobre'){
       res.statusCode = 200;
       res.setHeader('Content-Type', 'text/plain' );
       res.end('sobre\n');

    } else{
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain' );
        res.end('Not Found\n');
    }
});

server.listen(port,hostname,() =>{
    console.log(`server running at http://${hostname}:${port}/`);
});

