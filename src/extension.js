// Do not edit the variables below directly
const cities = ['London', 'Shanghai', 'New York', 'Delhi', 'Kuala Lumpur']
const names = []
const numbers = [1, 2, 3]
const colours = ['Red', 'Blue', 'Yellow']
const keys = ['q', 'w', 'e', 'r', 't', 'y']
const countries = ['Bolivia', 'Jordan', 'Greenland']
const fruits = ['Apple', 'Orange', 'Pear']

// 1. Add Fred to the names array
names.push('Fred')
console.log('q1: names :>> ', names)

// 2. Add 4 to the end of the numbers array
numbers.push(4)
console.log('q2: numbers :>> ', numbers)

// 3. Add Rio to the start of the cities array
cities.unshift('Rio')
console.log('q3: cities :>> ', cities)

// 4. Remove the first colour from the colours array
colours.shift()
console.log('q4: colours :>> ', colours)

// 5. Remove the last item from the keys array
keys.pop()
console.log('q5: keys :>> ', keys)

// 6. Remove Jordan from the countries array
const indexJordan = countries.indexOf('Jordan')
countries.splice(indexJordan, 1)
console.log('q6: countries :>> ', countries)

// 7. Remove the last fruit from the fruits array and store it in pear below
const pear = fruits.pop()
console.log('q7: fruits :>> ', fruits)
console.log('q7: pear :>> ', pear)

// some dodgy formatting for the commit
// another dodgy change

// Do not change the code below
module.exports = {
  a: names,
  b: numbers,
  c: cities,
  d: colours,
  e: keys,
  f: countries,
  g: fruits,
  h: pear
}
