const net = require("net");
//const client = require("./client")

const connect = function () {
  const conn = net.createConnection({
    host: "135.23.223.133", // IP address here,
    port: 50542, // PORT number here,
  });

  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

console.log("Connecting ...");
connect();
