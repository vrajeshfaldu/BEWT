const fs=require('fs')

console.log("Start")
fs.unlink('data.txt',(err)=>{
    if(err){
        console.log("error:",err)
        return
    }
    console.log("file deleted");

})
console.log("End")  