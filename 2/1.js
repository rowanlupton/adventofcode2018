/*
* Advent of Code 2018
* day 2, problem 1
*/

const fs = require('fs')
const inputs = fs.readFileSync('input').toString().split('\n')
let twos = 0
let threes = 0

inputs.forEach(input => {
  [...input].forEach(val => {
    let dupes = [...input].filter(val => val===val)
    if (dupes.length === 2) {
      twos++
    } else if (dupes.length === 3) {
      threes++
    }
  })
})