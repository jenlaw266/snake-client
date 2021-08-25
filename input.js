const handleUserInput = function (keyInput, connected) {
  if (keyInput === "w") connected.write("Move: up");
  if (keyInput === "a") connected.write("Move: left");
  if (keyInput === "s") connected.write("Move: down");
  if (keyInput === "d") connected.write("Move: right");

  if (keyInput === "\u0003") {
    process.exit();
  }
};

const setupInput = function (connectFuncPassHere) {
  const stdin = process.stdin;
  stdin.setRawMode(true); //reads + pause.
  stdin.setEncoding("utf8");
  stdin.resume(); //resumes
  stdin.on("data", (keyInput) => {
    handleUserInput(keyInput, connectFuncPassHere);
  });
  return stdin;
};

module.exports = setupInput;
