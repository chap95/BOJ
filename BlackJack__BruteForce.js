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
  main(input)
  process.exit();
});

let bestDistance = null;

function main(input){
	const condition = input[0];
	const values = input[1].split(" ");
	const cardCount = input[0].split(" ")[0];
	const target = input[0].split(" ")[1];
	calculate(cardCount, values, target);
	
}

function calculate(cardCount, values, target){
	let array = new Array(3);
	let isSmallestDistance = false;

	let bestSum = 0;

	for(var i = 0; i < values.length; i++){
		array[0] = values[i];
		for(var j = 0; j < values.length; j++){

			if(j !== i){
				array[1] = values[j];
				for(var k = 0; k < values.length; k++){

					if(k !== j && k !== i){
						array[2] = values[k];
						bestSum = getBest(array, target, bestSum);

						if(bestSum == target){
							console.log(bestSum);
							return;
						}
					}
				}
			}
		}
	}
	console.log(bestSum);
}

function getBest(array, target, bestSum){

	let sum = 0;
	array.map((value,i) => {
		sum += parseInt(value);
	});

	let currentDistance = target - sum;
	if(currentDistance < 0){
		return bestSum
	}

	if(bestDistance === null){
		bestDistance = currentDistance;
		return sum;
	}

	let usingDistance = Math.min(currentDistance, bestDistance);
	if(usingDistance === currentDistance){
		bestDistance = currentDistance;
		return sum;
	}


	return bestSum;
}