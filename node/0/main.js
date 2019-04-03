const http=require("http");

var my=http.createServer(function(req, res){
    res.writeHead(200,{"content-type":"text/html"})
    res.write("<h1>hello world</h1>")
    res.end()
})
my.listen(8000)
console.log("server is running")