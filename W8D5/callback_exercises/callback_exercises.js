class Clock {
  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
    let date = new Date;
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
  
    setInterval(this._tick.bind(this), 1000);
    // const timeClock = this._tick.bind(this);
    // setInterval(timeClock, 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    this.seconds += 1;
    if (this.seconds === 60) {
      this.minutes += 1;
      this.seconds = 0;
    }

    if (this.minutes === 60) {
      this.hours += 1;
      this.minutes = 0;
    }

    if (this.hours === 24) {
      this.hours = 0;
    }

    this.printTime();
  }
}

// const clock = new Clock();

// // Fri Jul 24 2020 13:47:23 GMT-0700 (Pacific Daylight Time) {}

// phase 2: addNumbers
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback){
  if (numsLeft > 0) {
    let num = reader.question("Enter a number", function(num) {
      let number = parseInt(num);
      sum += number;
      console.log(sum);
      numsLeft -= 1;
      addNumbers(sum, numsLeft, completionCallback);
    });
  } else {
    completionCallback(sum);
  }
}

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

// absurdBubbleSort

// const readline = require('readline');

// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} > ${el2}?`, function(answer) {
    if (answer === "yes") {
      callback(true);
    } else {
      callback(false);
    }
  })
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i + 1], function(isGreaterThan){
      if (isGreaterThan) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        madeAnySwaps = true
      }
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    });
  } else {
    outerBubbleSortLoop(madeAnySwaps);
  };
}


function absurdBubbleSort(arr, sortCompletionCallback) {
  
  function outerBubbleSortLoop(madeAnySwaps){
    if (madeAnySwaps == true) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(true);
}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
let array = [3, 1, 5, 4];
console.log(array);
innerBubbleSortLoop(array, 0, false, outerBubbleSortLoop);

// function calling

Function.prototype.myBind = function(context){
  return () => {
    this.apply(context);
  }
}

// class Lamp {
//   constructor() {
//     this.name = "a lamp";
//   }
// }

// const turnOn = function() {
//   console.log("Turning on " + this.name);
// };

// const lamp = new Lamp();

// turnOn(); // should not work the way we want it to

// const boundTurnOn = turnOn.bind(lamp);
// const myBoundTurnOn = turnOn.myBind(lamp);

// boundTurnOn(); // should say "Turning on a lamp"
// myBoundTurnOn(); // should say "Turning on a lamp"

// myThrottle and myDebounce

Function.prototype.myThrottle = function(interval2) {
  let that = this;
  let tooSoon = false;
  return function(){
    if (tooSoon === false) {
      tooSoon = true;
      setTimeout(() => tooSoon = false, interval2);
      that(interval2);
    }
  }
}

// class Neuron {
//   fire() {
//     console.log("Firing!");
//   }
// }

// const neuron = new Neuron();
// When we create a new Neuron,
// we can call #fire as frequently as we want

// The following code will try to #fire the neuron every 10ms. Try it in the console:
// const interval = setInterval(() => {
//   neuron.fire();
// }, 10);

// You can use clearInterval to stop the firing:
// clearInterval(interval);

// Using Function#myThrottle, we should be able to throttle
// the #fire function of our neuron so that it can only fire
// once every 500ms:

// neuron.fire = neuron.fire.myThrottle(500);

// const interval = setInterval(() => {
//   neuron.fire();
// }, 10);

// neuron.fire

// This time, if our Function#myThrottle worked correctly,
// the Neuron#fire function should only be able to execute
// every 500ms, even though we're still trying to invoke it
// every 10ms!

// If we want this behavior for ALL neurons, we can do the same logic in the constructor:

// class Neuron {
//   constructor() {
//     this.fire = this.fire.myThrottle(500);
//   }

//   fire() {
//     console.log("Firing!");
//   }
// }

// let neuron = new Neuron;

// neuron.fire();