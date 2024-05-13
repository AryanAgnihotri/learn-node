const { readFile, writeFile } = require('fs').promises;

//if you call .promises it will worlk sam as this
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

console.log('hello');

const start = async () => {
    try {
        const first = await readFile('./content/first.txt','utf-8');
        const second = await readFile('./content/second.txt','utf-8');
        console.log(first,second);
        const result = await writeFile('./content/result-third.txt',`\nThis is my next line`,{flag:'a'});
        console.log(result);
    } catch (error) {
        console.log(error);
    }
} 

start();
