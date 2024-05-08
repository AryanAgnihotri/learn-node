// npm -global : command (come with node)
// npm --version : to check installed npm version 

// we can install a package/module only from a particular project by this command
// npm install <package name>  or npm i <package name>

// To download any package globally
// npm install -g <package name>
// sudo npm install -g <package name> (in mac)

// package.json file - we create this file to store important details about the project

// we can do this manually by creating package.json file in root followed by creating properties etc
// or by running npm init command (step-by-step press enter to skip)
// or by skipping everything just by running npm init -y command


const lodash = require('lodash');

const items  = [1,[2,[3,[4,5]]]];
console.log(lodash.flattenDeep(items));
