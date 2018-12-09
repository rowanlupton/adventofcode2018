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
  let coordinates = {x: Number(claim[2]), y: Number(claim[3])}
  let size = {x: Number(claim[4]), y: Number(claim[5])}

  return {id: id, coordinates: coordinates, size: size}
}

let duplicates = 0
let fabricAreas = []

inputs.forEach(input => {
  for (let  x = input.coordinates.x;
            x < input.coordinates.x + input.size.x;
            x ++) {
    if (!fabricAreas[x]) fabricAreas[x] = []
    for (let  y = input.coordinates.y;
              y < input.coordinates.y + input.size.x;
              y++) {
      if (!fabricAreas[x][y]) fabricAreas[x][y] = 0
      fabricAreas[x][y]++
      if (fabricAreas[x][y] === 2) duplicates++
    }
  }
})

console.log(duplicates)

/*
probably do this with an object of arrays? my off the cuff idea here is to
give each array a value of 1 when it's first found, and if it already had a 1 in
it then we'll increment a counter. If it had a 2 or above, don't increment the
counter.
*/

/*
* WRONG ANSWERS
* 123369 (too high)
*/