// function sum() {

// solution #1
    // 

//     let sum = 0;
//     let args = Array.from(arguments);
// // argument will take whatever inside the sum function
//     for (let i = 0; i < args.length; i++) {
//         sum += args[i]
//     }
//     console.log(sum)
// }

// solution #2
    //
// function sum(...numbers) {

//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i]
//     }
//     console.log(sum)
// }

// sum(1, 2, 3, 4) === 10;
// sum(1, 2, 3, 4, 5) === 15;

// Function.prototype.myBind = function(context, ...says) {
//     // context is the instance variable which we want to bind the method to ex. Dog.
//     // is the arguments from where we are binding from ex. sounds and person
//     // says = bind time
//     let that = this

//     // this is like binding function ex. class.instance_method / cat.says / Marlov.says
//     return function(...args) { that.apply(context, says.concat(args))};
    // apply(thisArg, [argsArray])
    // function here is the returning values of myBind ex. sounds and person?
    // args = call time

    // it may take in arguments, which is an array

    // this is an instance of function
// };
// ES5 way: because the scope changes if we create a new inner function


// // pavlov.says(meow, kush)

Function.prototype.myBind = function(context){
    let says = Array.from(arguments);
    says.shift();
    let that = this;
    // console.log(says);
    return function(){
        // additional arguments
        let args = Array.from(arguments);
        that.apply(context, says.concat(args))
    }
}

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args - 
// markov.says.myBind(pavlov, "meow", "Kush")();
// // pavlov.says(meow, kush)

// // markov.says is the receiver which is a function
// // 
// markov.says.myBind(pavlov)("meow", "a tree");

// markov.says.myBind(pavlov, "meow")("Markov"); //['meow', 'Markov']
// // 
// // meow = bind time - extra arguments
// // markov = call time - actual
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");

function curriedSum(numArgs) {
    let numbers = [];
    function _curriedSum(num) {
        numbers.push(num);
        
        if (numbers.length === numArgs) {
            let sum = 0;
            for (i = 0; i < numbers.length; i ++) {
                sum += numbers[i];
            }     
            return sum;
        } else {
            return _curriedSum;
        }

    }
    return _curriedSum;
}

// const sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1)); // => 56

Function.prototype.curry = function(numArgs) {
    let numbers = [];
    let that = this;
    function _collect(arg) {
        numbers.push(arg);
        if (numbers.length === numArgs) {
            return that(...numbers);
            // ...numbers = [1, 2, 3]
            // ...numbers = (1, 2, 3)
        } else {
            return _collect;
        }
    }
    
    return _collect;
}

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

// or more briefly:
console.log(sumThree.curry(3)(4)(20)(6));

/**
 * With ES6 arrow functions
 * Notice we dont need to keep track of the `this` context (const fn = this).
 * An arrow function does not have its own `this`, 
 * the `this` value of the enclosing execution context is used.
//  */
// Function.prototype.curry2 = function (nArg) {
//     const argArray = [];
//     const _curriedFn = (arg) => {
//         argArray.push(arg);
//         if (argArray.length === nArg) {
//             // spreading the array into individual arguments
//             return this(...argArray);
//         } else {
//             return _curriedFn;
//         }
//     };
//     return _curriedFn;
// };