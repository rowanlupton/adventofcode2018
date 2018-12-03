/*
* Advent of Code 2018
* day 1, problem 1
*/

const fs = require('fs')
const input = fs.readFileSync('input').toString().split('\n').map(Number)
let sum = 0

input.forEach(function (freq) {
  sum += freq
})

console.log(sum)
