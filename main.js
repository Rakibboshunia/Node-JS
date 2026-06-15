var http=require('http');
var server=http.createServer(function(req,res){
    
    if(req.url=="/"){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("<h1>Welcome to Home Page</h1>");
        res.end();
    }
    else if(req.url=="/about"){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("<h1>Welcome to About Page</h1>");
        res.end();
    }
    else if(req.url=="/contact"){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("<h1>Welcome to Contact Page</h1>");
        res.end();

    }
});

server.listen(3000);
console.log('Server run Successfully on port 3000');