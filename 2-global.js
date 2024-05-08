/* 

-------- global varible --------

__dirname  : represent current directory
__filename : represent full filname
require : function to use modules (commonJS)
process : give info about env in which program is executed
module : give info about current module(file) 

*/

console.log(__dirname);
console.log(__filename);
console.log(module);
// console.log(process);

setInterval(()=>{
    console.log('hello world');
}, 1000);