const { log } = require('console');
const {readFileSync,writeFileSync} = require('fs');

console.log('start');
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

// writeFileSync('./content/sync-output.txt',`this is output file \n\n${first}\n${second}`);
writeFileSync('./content/sync-output.txt',`this is output file \n\n${first}\n${second}`,{flag:'a'});

console.log('done with this task');
console.log('starting the next one');