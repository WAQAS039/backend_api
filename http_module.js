const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url == "/"){
        res.end('Welcome');
    }
    if(req.url == "/about"){
        res.end('about');
    }
    if(req.url != "/about" || req.url != "/"){
        res.end('Ops!');
    }
    
});

server.listen(5000)