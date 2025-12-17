const fs=require('fs')

console.log("Start")
fs.mkdir('lab63',true,(err)=>{
    if(err.code === 'EEXIST' ){
        console.log('folder already exist',err.code)
        return
    }
    else if(err){
        console.log("Error:",err)
        return
    }
    console.log("created....")
})
console.log("End")