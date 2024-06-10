 const file=require('fs')
const mathOperation=require('./Addition')
file.readFile('index.html',(err,data)=>{
    if(err){
        console.log("file reading encounter error:",err)
        return;
    }
    console.log(data)
 })
const subtraction=mathOperation.SubTractTwoNumbers(100,50)
console.log(subtraction)