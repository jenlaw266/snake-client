const connectFunc = require("./client");
const setUpInput = require("./input");

console.log("Connecting ...");
setUpInput(connectFunc());
