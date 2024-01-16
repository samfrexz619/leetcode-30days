/*
Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
*/
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
