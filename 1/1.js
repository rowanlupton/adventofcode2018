/*
* Advent of Code 2018
* day 1, problem 1
*/

const fs = require('fs')
const inputs = fs.readFileSync('input').toString().split('\n').map(Number)
let sum = 0

inputs.forEach(function (input) {
  sum += input
})

console.log(sum)
