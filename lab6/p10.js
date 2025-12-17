const fs=require('fs')

fs.watch('.',(eventType,filename)=>{
    if(filename === 'data2.txt'){
        console.log(filename,'event Type:',eventType);
    }
})

console.log("End")


const fs=require('fs')

fs.watch('.',(eventType,filename)=>{
    
        console.log(filename,'event Type:',eventType);
})

console.log("End")