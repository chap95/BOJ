const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  const result = solve(line, line.length);
	console.log(result);
  rl.close();
}).on("close", function() {
  process.exit();
});

function solve(input, digitLength){
	if(digitLength === 0) {
		return digitLength;
	}

	for (let i = 0; i < input; i++){
		let isValid = isConstructor(input, i , digitLength);
		if(isValid){
			return i
		}
	}
	return 0;
}

function isConstructor(input, value, digitLength){
	let tempValue = String(arguments[1]);
	let tempValueLength = tempValue.length;
	let valueArray = [];
	if(tempValueLength - digitLength < 0){

		let pushLoop = digitLength - tempValueLength;
		for(var i =  0; i < pushLoop; i++){
			valueArray.push(0);
		}

		
		for(var j = 0; j < tempValueLength; j++){
			valueArray.push(Number(tempValue[j]));
		}


	} else {
		for(var i = 0; i < tempValue.length; i++){
			valueArray.push(Number(tempValue[i]));
		}
	}

	let sum = valueArray.reduce((sum, cur) => {
		return sum + cur
	})

	if(input - value === sum){
		return true;
	}
	return false;
}