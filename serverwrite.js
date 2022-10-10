var http=require('http');
var fs=require('fs');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text\plain'});
    res.write('hello write in the web');
    res.end();
}).listen(4000);