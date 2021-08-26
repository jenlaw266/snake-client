const connect = require("./client");
const setUpInput = require("./input");

console.log("Connecting ...");
setUpInput(connect());
/*
let connection;

const setupInput = (conn) => {
  connection = conn;
};
*/
