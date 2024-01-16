/*
Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
*/
// Counter II
const createCounter = function(init) {
  let currVal = init;

  return {
    increment: () => currVal+= 1,
    reset: () => currVal = init,
    decrement: () => currVal-= 1
  }
}

const counter = createCounter(5)
console.log(counter.increment())
console.log(counter.reset())
console.log(counter.decrement())


/*
Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
*/

const expect = function(val) {
  const a = val
  return {
      toBe: function(val){
          if(a === val){
              return true
          } else {
              throw new Error('Not Equal')
          }

      },
      notToBe: function(val){
          if(a !== val){
              return true
          } else {
              throw new Error('Equal')
          }
      }
  }
};

// console.log(expect(5).toBe(5))
// console.log(expect(5).notToBe(5))

/*
Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
*/
// COUNTER
const createCounter1 = function(n) {
    
  return function() {
      const a = n
      n+= 1
      return a
  };
};

 
const counter1 = createCounter1(10)
console.log(counter1())
console.log(counter1())
console.log(counter1())
