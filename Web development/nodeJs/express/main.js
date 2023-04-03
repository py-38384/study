const http = require('http');
const fs = require('fs');

const home = fs.readFileSync('./index.html');
const contact = fs.readFileSync('./contact.html');
const about = fs.readFileSync('./about.html');
const services = fs.readFileSync('./services.html');

const hostName = '127.0.0.1';
const port = 80;

const server = http.createServer((req,res)=>{
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader('content-Type','text/html');
    if(req.url === '/' || req.url === '/home'){
        res.end(home);
    }
    else if(req.url === '/about'){
        res.end(about);
    }
    else if(req.url === '/contact'){
        res.end(contact);
    }
    else if(req.url === '/services'){
        res.end(services);
    }
    else{
        res.statusCode = 404;
        res.end('404 Error page not found');
    }
});

server.listen(port, hostName, () => {
    console.log(`Server running at http://${hostName}`);
});