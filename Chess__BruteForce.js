const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line)
}).on('close', function() {
  solve(input);

  process.exit();
})


function solve(input) {
  var aspect = input[0].split(" ");
  var horizontal = aspect[0];
  var vertical = aspect[1];
  var allInOneRow = [];
  
  for(var i = 1; i + 7 <= horizontal; i++ ){
    console.log(i)
    for(var j = 0; j + 8 < vertical; j++){
      for(var h = i; h < h+8; h++){
        var row = input[h].split("");
        console.log('row -> ', row);
        for(var v  = j; v < v+8; v++){

        }
      }
    }
  }
}