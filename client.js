const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "135.23.223.133", // IP address here,
    port: 50542, // PORT number here,
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("successfully connected to the game server");
    conn.write("Name: HYJ");
    //setInterval(() => conn.write("Move: up"), 50);
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = { connect };
