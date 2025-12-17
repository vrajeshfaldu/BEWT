const fs=require('fs')

console.log("Start")
fs.copyFile('data.txt','data2.txt',(err)=>{
    if(err){
        console.log("error:",err)
        return
    }
    console.log("copy successfully");

})
console.log("End")