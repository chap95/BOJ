export function fs(filename){
  var fs = require("fs");
  var input = fs.readFileSync(filename).toString().split("\n");
  return input
}