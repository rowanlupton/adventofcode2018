/*
* Advent of Code 2018
* day 2, problem 1
*/

const fs = require('fs')
const inputs = fs.readFileSync('input').toString().split('\n')
let twos = 0
let threes = 0

inputs.forEach(input => {
  let inputArr = [...input]
  let foundATwo = false
  let foundAThree = false

  while (inputArr.length>1) {
    if (foundATwo === true && foundAThree === true) break
    let val = inputArr.shift()
    let duplicates = [val, ...inputArr.filter(test => test === val)]
    inputArr = inputArr.filter(test => test !== val)

    if (!foundATwo && duplicates.length === 2) {
      twos++
      foundATwo = true
    } else if (!foundAThree && duplicates.length === 3) {
      threes++
      foundAThree = true
    }
  }
})

console.log('twos:    ',twos)
console.log('threes:  ',threes)
console.log('checksum:',twos*threes)