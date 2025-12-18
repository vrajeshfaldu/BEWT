const express =require("express")
const fs=require('fs')
const app=express()


app.get('/about',(req,res)=>{

    fs.readFile('temp.txt','utf-8',(err,data)=>{
        if (err) {
        res.statusCode = 500;
        res.send("Error",err);
        return
      } else {
        res.statusCode = 200;
        console.log(data)
        res.send(data);
      }
    })
})

app.get('/contact',(req,res)=>{
    fs.readFile('../lab8/contact.txt','utf-8',(err,data)=>{
        if (err) {
        res.statusCode = 500;
        res.send("Error",err);
      } else {
        res.statusCode = 200;
        res.send(data);
      }
    })
})


app.use((req,res)=>{
    res.status(404).send("page not found")
})
app.listen(3000,()=>{
    console.log("server start at@3000")
})