// const fs=require('fs')

// console.log("Start")
// fs.writeFile('data2.txt','heelooo vrajesh',(err)=>{
//     if(err){
//         console.log("error:",err)
//         return
//     }
//     console.log("data write");

// })
// console.log("End")


const fs=require('fs')

console.log("start")
try{
    const data=fs.writeFileSync('data2.txt','hello vrajesh')
   
    console.log("write file");

}
catch(err){
    console.log("error:",err)
}

console.log("End")