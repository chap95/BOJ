const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];

let counter;

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solve(input[0]);
});

function solve(value){
  var origin = parseInt(value);
  let prefixNumber = origin - 1;
  var rawNumber = prefixNumber * 1000 + 666;
  var stringNumber = String(rawNumber);
  var prefixArray = String(prefixNumber).split('');
  prefixArray.map((value) => {
    if(value === '6'){
      
    }
  })


  console.log(stringNumber.split("").reduce(reducer));
  function reducer(accumulator, currentValue, currentIndex){
    
    if(currentIndex === 1){
      counter = accumulator === '6' ? 1 : 0;
    }
  
    if(currentValue === '6'){
      counter++;
    } else {
      counter = 0
    }
  
    console.log(currentIndex, counter)
    
    if(counter > 3){
      return accumulator + "0";
    }
  
  
    
    return accumulator + currentValue;
  }
}




