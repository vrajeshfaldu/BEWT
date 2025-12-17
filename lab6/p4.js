const fs=require('fs')

console.log("Start")
fs.appendFile('data2.txt','\nhow are you',(err)=>{
    if(err){
        console.log("error:",err)
        return
    }
    console.log("append successfully");

})
console.log("End")