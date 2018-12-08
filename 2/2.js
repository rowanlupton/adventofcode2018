/*
* Advent of Code 2018
* day 2, problem 2
*/

const fs = require('fs')
const inputs = fs.readFileSync('input').toString().split('\n')
  .map((input) => [...input])

/*
abcdefg
abcedfg
abcddfg

> [a,b,c,d,e,f,g]
> a
> > check if this index of following strings matches
> > if yes, leave it in
> > check length of that string; if it's input.length - 1 we have our answer

how to check index of following strings? information we have:
  string
  string index
  character inside string
  index of character inside string

we don't need string. we probably want the string index, so that we don't repeat
ourselves: we only have to look forwards for the check
we do need the current character. how else would we check it? and we need the
index, so that we check the right character in following strings.

so: we need to build a filter function, and we need to pass it:
  string index
  character inside string
  index of character inside string

that filter will need to check inputs[each one above string index]
and check inputs[][index of character inside string] === character inside string

the thing to do here is to make a _new_ array out of the inputs, but starting
from string index. we then call the filter on that.
*/
// console.log(inputs.slice(0,2))
// return true
inputs.forEach((input, index) => {
  let match = []
  futureInputs = inputs.slice(index + 1)
  // console.log(futureInputs[0])

  match.push(input.filter((char, charIndex) => {
    // filter for chars who appear in the same index in future input(s)

  }))

  // input.forEach((char, charIndex) => {
  //   match.push(futureInputs.filter(futureInput => futureInput[charIndex] === char))
  // })
  if (match.length !== 26) {console.log(match.length); return true}
})

// console.log('finished')