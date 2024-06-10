const http=require('http')
const fs=require('fs');
const path=require('path')
const port=9000
const server=http.createServer((req,res)=>{
    const urlPath=req.url
    if(urlPath==='/contact'){
        res.writeHead(200,{"Content-Type":"text/plain"})
        res.end("Contact Page")
        return
    }else if(urlPath==='/home'){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.end(`<h1>Home Page</h1>`)
        return
    } else if(urlPath==="/"){
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) =>{
            if(err){
             res.writeHead(503) 
             res.end("Forbiden")  
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
        } )
        return
    }else{
        res.writeHead(404)
        res.end("Page not found!")
        return
    }
    
})

server.listen(port,()=>{
    console.log(`server running at port ${port}, visit your browser at localhost:${port}`)
})