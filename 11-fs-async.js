const {readFile,writeFile} = require('fs');

console.log('start');
readFile('./content/first.txt','utf8',(error,result)=>{
    if(error){
        console.log(error);
        return;
    }
    const first = result;

    readFile('./content/second.txt','utf8',(error,result)=>{
        if(error){
            console.log(error);
            return; 
        }
        const second  = result;

        writeFile('./content/async-output.txt',`this is merged file ${first}, ${second}`,{flag:'a'},(error,result)=>{
            if(error){
                console.log('error occured',error);
                return;
            }
            console.log('done with this task');
        })
    })
})
console.log('starting next task');