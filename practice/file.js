const fs = require('fs');

//reading file text
const readText= fs.readFileSync('./texts/read.txt', "utf-8");
console.log(readText);

//writing file text
const writeText= fs.writeFileSync('./texts/write.txt', readText + 'Hello World');
console.log(writeText)