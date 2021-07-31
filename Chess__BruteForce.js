const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  var whiteCaseResult = solve(input, 'W');
  var blackCaseResult = solve(input, "B");
  console.log(whiteCaseResult <= blackCaseResult ? whiteCaseResult : blackCaseResult)
  process.exit();
});

function solve(input, start) {
  var aspect = input[0].split(" ");
  var horizontal = parseInt(aspect[0]);
  var vertical = parseInt(aspect[1]);
  var minColoring = null;
  for (var i = 1; i + 7 <= horizontal; i++) {
    for (let j = 0; j + 7 < vertical; j++) {
      var curColoring = 0;
   
      for (var h = i; h < i + 8; h++) {
        var row = input[h].split("").slice(j, j + 8);
          if(!isCorrecrInitColor(start, row[0], h - i)){
            curColoring++;
            initColor = row[0] === 'W' ? 'B' : 'W';
          } else {
            initColor = row[0];
          }
        
        row.map((value, index) => {

          if(!isCorrectColor(initColor, value, index)){
            curColoring++;
          }
        })
      }
      
      if(minColoring === null || minColoring > curColoring){
        minColoring = curColoring;
      }
      
    }
  }
    
  return minColoring;
}

function isCorrectColor(initColor, curColor, index){
  if(index === 0){
    return true;
  }

  if((index + 1) % 2 === 0){
    if(initColor === curColor){
      return false;
    }
    return true;
  }

  if(initColor === curColor){
    return true;
  }
  return false;
}

function isCorrecrInitColor(initPointColor, curColor, row){
  if((row + 1) % 2 === 0){
    if(initPointColor === curColor){
      return false;
    }
    return true;
  }

  if(initPointColor === curColor){
    return true;
  }

  return false;
}
