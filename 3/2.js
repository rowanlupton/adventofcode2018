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

let fabricAreas = []

inputs.forEach(input => {
  for (let  x = input.coordinates.x;
            x < input.coordinates.x + input.size.x;
            x++) {
    if (!fabricAreas[x]) fabricAreas[x] = []
    for (let  y = input.coordinates.y;
              y < input.coordinates.y + input.size.y;
              y++) {
      if (!fabricAreas[x][y]) fabricAreas[x][y] = 0
      fabricAreas[x][y]++
      if (fabricAreas[x][y] > 1) duplicates++
    }
  }
})