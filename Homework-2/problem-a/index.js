/*jslint node: true */
'use strict';

//Create a variable `backpack` that is an Object with properties:
//  `color` "blue", `height` of 18, `width` of 12, `depth` of 6
//  It should also have a property called `contents` that is an array
//  of these strings: "map", "flashlight", "compass"

let backpack = {
  color : "blue",
  height : 18,
  width : 12,
  depth : 6,
  contents : ["map", "flashlight", "compass"]
};


// Finally, log out the backpack object in JSON using the JSON.stringify() method

JSON.stringify(Backpack);


// Create a function called Backpack that we will call as a constructor using the "new" keyword.
// It should accept five arguments and return an instance of a backpack object matching the 
// backpack pattern described in the first question above. 

// Note: The backpack constructor should have default values for each parameter so all five values aren't necessary.
// Use the color and dimensions from the object above, and an empty array for contents.

function Backpack(color, height, width, depth, contents){

  color === undefined ? (this.color = "blue") : (this.color = color);

  height === undefined ? (this.height = 18) : (this.height = height);

  width === undefined ? (this.width = 12) : (this.width = width);

  depth === undefined ? (this.depth = 6) : (this.depth = depth);

  contents === undefined ? (this.contents = []) : (this.contents = contents);
}


// Create a method called packBuilder that will take in a "color" parameter and return a promise for a new backpack
// after a random delay between 100 - 1000 ms. You will want to use the setTimeout method to initiate this delay.
// Hint #1: Create a new promise to return. The first answer here could be helpful:
// https://stackoverflow.com/questions/24928846/get-return-value-from-settimeout
// Hint #2: use this algorithm for generating a random number in a range:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values_inclusive

function packBuilder(color) { 
  
  return new Promise(function(resolve, reject) {

    setTimeout(resolve(new Backpack(color), getRandomInt(1000,2000)));   //Returns this new backpack
    
    setTimeout(reject("failed"), getRandomInt(1000,2000)); //Or return this "failed" message
  });
}

function getRandomInt(min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}


// Now use packBuilder to create an instance of the Backpack that is "pink". This function call returns
// a promise so you will use "then()" to do run more code after it finishes. Once it's done,
// log out the backpack that was created

/*
packBuilder("pink") // 'p' is either a new backpack or the "failed" message
.then((p) => console.log(p)) 
.catch((p) => console.log(p));
*/

// Build an async function called scoutTroopPacks() that uses packBuilder() and returns an array of 
// four backpacks with these colors in order every time: red, blue, orange, purple (other values are defaults)
// Note: it is easiest to use async/await for this

// Call the scoutTroopPacks() function and "then" log out the result

//this is the then and catch method requested
async function scoutTroopPacks() {
  return await new Promise((resolve, reject) => { //returns a promise: if resolved, is an array of backpacks, if rejected, returns a string "failed"
    let packArr = [packBuilder("red"), packBuilder("blue"), packBuilder("orange"), packBuilder("purple")];
    resolve(packArr);
    reject("failed");
  });
}

scoutTroopPacks()
.then((p) => { console.log(p); }) 
.catch((p) => { console.log(p); });

//this is the try catch method that seems to typically be used for async functions
async function scoutTroopPacks() {
  try {
    let packArr = [packBuilder("red"), packBuilder("blue"), packBuilder("orange"), packBuilder("purple")];
    console.log(packArr);
  }
  catch(error) {
    console.log(error);
  }
}
scoutTroopPacks();

//Make functions and variables available to tester. DO NOT MODIFY THIS.
if(typeof module !== 'undefined' && module.exports){
    /* eslint-disable */
    if(typeof Backpack !== 'undefined') 
      module.exports.Backpack = Backpack;
    if(typeof packBuilder !== 'undefined') 
      module.exports.packBuilder = packBuilder;
    if(typeof scoutTroopPacks !== 'undefined') 
      module.exports.scoutTroopPacks = scoutTroopPacks;
  }



