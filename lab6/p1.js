const fs=require('fs')

console.log("Start")
fs.readFile('data.txt',(err,data)=>{
    if(err){
        console.log("error:",err)
        return
    }
    console.log(data.toString());

})
console.log("End")