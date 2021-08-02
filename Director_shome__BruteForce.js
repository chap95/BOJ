const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  var result = solve(input[0]);
  console.log(result);
});

function solve(value){
  var input = parseInt(value);
  var leastApocalypseNumber = 665;

  while(input > 0){
    leastApocalypseNumber++;
    if(leastApocalypseNumber.toString().indexOf('666') !== -1){
      input--
    }
  }

  return leastApocalypseNumber
}




