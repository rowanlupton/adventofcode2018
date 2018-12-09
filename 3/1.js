/*
* Advent of Code 2018
* day 0, problem 0
*/

const fs = require('fs')
const inputs = fs.readFileSync('input').toString().split('\n')
                  .map(parseClaim)

function parseClaim (claim) {
  claim = claim.split(/[#@,:x]/)

  let id = Number(claim[1])
  let coord = [Number(claim[2]), Number(claim[3])]
  let size = [Number(claim[4]), Number(claim[5])]

  return [id, coord, size]
}

let duplicates = 0
let fabricAreas = []

/*
probably do this with an object of arrays? my off the cuff idea here is to
give each array a value of 1 when it's first found, and if it already had a 1 in
it then we'll increment a counter. If it had a 2 or above, don't increment the
counter.
*/

