/*
* Advent of Code 2018
* day 0, problem 0
*/

const fs = require('fs')
const inputs = fs.readFileSync('input').toString().split('\n')
                  .map(parseClaim)

function parseClaim (claim) {
  let id = Number(claim.split(/[#@]/)[1])
  let coord = [Number(claim.split(/[@,:]/)[1]), Number(claim.split(/[@,:]/)[2])]
  let size = [Number(claim.split(/[:x]/)[1]), Number(claim.split(/[:x]/)[2])]
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

