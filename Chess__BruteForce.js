const readline = require("readline");
var fs = require("fs");
var input = fs.readFileSync("chess.txt").toString().split("\n");
solve(input);
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// console.log("input->", input);
// let input = [];

// rl.on("line", function (line) {
//   input.push(line);
// }).on("close", function () {
//   solve(input);

//   process.exit();
// });

function solve(input) {
  var aspect = input[0].split(" ");
  var horizontal = Number(aspect[0]);
  var vertical = Number(aspect[1]);
  var allInOneRow = [];
  console.log("horizontal , vertical -> ", horizontal, vertical);
  for (var i = 1; i + 7 <= horizontal; i++) {
    console.log("candidate index -> ", i);
    for (var j = 0; j + 7 < vertical; j++) {
      for (var h = i; h < i + 8; h++) {
        console.log("selectd index -> ", h);
        var row = input[h].split("");
        console.log("row -> ", row);
        for (var v = j; v < j + 8; v++) {
          allInOneRow.push(row[v]);
        }
      }
    }
  }

  console.log(allInOneRow);

  return;
}
