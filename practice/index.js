// local modules
const {a, add} = require("./local-1");
const {a: a2, add: add2} = require("./local-2");
console.log(add(2, 4), a);
console.log(add2(5, 5, 5), a2);

//built-in-modules
const path= require("path");
console.log(path.dirname("H:/learning-node/index.js"));

const pathParse= require("path");
console.log(pathParse.parse("H:/learning-node/index.js"));

const pathJoin= require("path");
console.log(pathJoin.join("H:/learning-node/", "local-1.js"));