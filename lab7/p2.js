const http =require("http")

const server = http.createServer((req,res)=>{
    res.setHeader('content-Type','text/plain')
    if(req.url === '/'){
        res.statusCode=200
        res.end("Home page")

    }
    else if(req.url === '/about'){
        res.statusCode=200
        res.end("about page")

    }
    else if(req.url === '/contact'){
        res.statusCode=200
        res.end("contact page")

    }
    else if(req.url === '/help'){
        res.statusCode=200
        res.end("help page")

    }
    else if(req.url === '/description'){
        res.statusCode=200
        res.end("description page")

    }
    else{
        res.statusCode=404
        res.end("page not found"+res.statusCode)

    }

    res.end("hello from programme 1")
})

server.listen(3000,()=>{
    console.log("server start at @3000");
})