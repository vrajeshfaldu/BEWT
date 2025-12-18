const express =require("express")
const app=express()

app.get('/',(req,res)=>{
    res.send("<h1>home page</h1>")
})
app.get('/about',(req,res)=>{
    res.send("<h1>about page</h1>")
})
app.get('/contact',(req,res)=>{
    res.send("<h1>contact page</h1>")
})
app.get('/help',(req,res)=>{
    res.send("<h1>help page</h1>")
})
app.get('/description',(req,res)=>{
    res.send("<h1>description page</h1>")
})

app.use((req,res)=>{
    res.status(404).send("page not found")
})
app.listen(3000,()=>{
    console.log("server start at@3000")
})