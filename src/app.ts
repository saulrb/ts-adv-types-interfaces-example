type Combinable = string | number
type Numeric = number | boolean
// Intersection types
type Universal = Combinable & Numeric

// function overloads
function add(a: number, b: number): number
function add(a: string, b: string): string

function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString()
  }
  return a + b
}

const result = add('Max', ' Schwarz')
result.split(' ')
console.log(result)

const fetchedUserData = {
  id: 'u1',
  name: 'Max',
  job: { title: 'CEO', description: 'My own company' }
}

console.log(fetchedUserData?.job?.title)

const userInput = undefined
// nullish coalescing operator ?? (only null or undefined)
const storedData = userInput ?? 'DEFAULT'

console.log(storedData)
