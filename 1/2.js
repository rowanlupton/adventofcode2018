/*
* Advent of Code 2018
* day 1, problem 2
*/

const fs = require('fs')
const input = fs.readFileSync('input').toString().split('\n').map(Number)
let sum = 0
let seenFrequencies = []
let duplicate = null

while (!duplicate) {
  for (let i = 0; i < input.length; i++) {
    let freq = input[i]
    sum += freq
    if (seenFrequencies[sum]) {
      duplicate = sum
      break
    }
    seenFrequencies[sum] = true
  }
}
console.log('duplicate:',duplicate)
