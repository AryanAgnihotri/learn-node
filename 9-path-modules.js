const path = require('path');

console.log(path.sep);

const filePath = path.join('/content/','subContent/','test.txt');
console.log(path.basename(filePath));

const absolutePath = path.resolve('content','subContent','test.txt');
console.log(absolutePath);