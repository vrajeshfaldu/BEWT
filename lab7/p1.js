const http =require("http")

const server = http.createServer((req,res)=>{
    res.statusCode=200
    res.setHeader('content-Type','text/plain')
    res.end("hello from programme 1")
})

server.listen(3000,()=>{
    console.log("server start at @3000");
})