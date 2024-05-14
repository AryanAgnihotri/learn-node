
const http = require('http');
const fs = require('fs');

http.createServer(function(req,res){
    const fileStream = fs.createReadStream('./content/bigFile.txt','utf8');

    fileStream.on('open',()=>{
        fileStream.pipe(res)
    })
    fileStream.on('error',()=>{ 
        res.end('error');
    })
}).listen(5000);  
 
// const {writeFileSync} = require('fs');
// for(let i=0; i<10000; i++) {
//     writeFileSync('./content/bigFile.txt',`${i} Hello Ji\n`,{flag:'a'},);
// }

// const {createReadStream} = require('fs');
// const stream = createReadStream('./content/bigFile.txt',{highWaterMark:90000,flag:'a',encoding:'utf8'});
// stream.on('data',(result)=>console.log(result));

