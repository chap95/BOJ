const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line)
})
  .on('close', function () {
    var result = solve(input)
    var resultString = '';
    result.map((value, index) => {
      resultString += value;
      if(index !== result.length - 1){
        resultString += ' ';
      }
    })

    console.log(resultString);
  process.exit();
});

function solve(inputArray){
  
  var rankArray = [];
  for(var i = 1; i < inputArray.length; i++){
    var rank = 1;
    var cur = inputArray[i].split(" ");
    var weight = Number(cur[0]);
    var height = Number(cur[1]);
    
    for(let j = 1; j < inputArray.length; j++){
      
      if(i === j){
        continue;
      }
      var next = inputArray[j].split(" ");
      var Nweight = Number(next[0]);
      var Nheight = Number(next[1]);
      
      if((weight < Nweight && height < Nheight)){
        rank++;
      }
    }
    
    rankArray.push(rank)
  }

  return rankArray
}