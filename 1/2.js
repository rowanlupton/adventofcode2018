/*
* Advent of Code 2018
* day 1, problem 2
*/

const fs = require('fs')
const inputs = fs.readFileSync('input').toString().split('\n').map(Number)
let sum = 0
let seenFrequencies = []
let duplicate = null

while (!duplicate) {
  for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i]
    sum += input
    if (seenFrequencies[sum]) {
      duplicate = sum
      break
    }
    seenFrequencies[sum] = true
  }
}
console.log('duplicate:',duplicate)
