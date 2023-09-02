// core modules in node.js

//OS modules :

const os = require("os");

//path modules :

const path = require("path");

console.log(os.version());
console.log(os.type());
console.log(os.machine());
console.log(os.homedir());
console.log(os.platform());
console.log(os.hostname());
console.log(os.userInfo());

//default modules

console.log(__dirname);
console.log(__filename);

console.log("----------------------------------------------");

//path

console.log(path.basename(__filename));
console.log(path.dirname(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename).root);
