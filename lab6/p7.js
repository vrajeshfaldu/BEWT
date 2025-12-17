const fs=require('fs')


console.log("Start")
fs.readdir('../lab6',(err,data)=>{
    if(err){
        console.log("error:",err)
        return
    }
    console.log(data);

    data.forEach((filename,index)=>{
        console.log(index,':',filename)
    })

})
console.log("End")