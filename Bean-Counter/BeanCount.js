/* 
Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.
*/

function BCounter(countString) {
    let countB = 0;
    for(let i = 0; i < countString.length; i++ ) {
        if(countString[i] == "B") {
            countB++;
        }
    }
    return countB;
}

console.log(BCounter("BBACABbbAA")); // 3

/*
Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted 
(rather than counting only uppercase “B” characters). 
Rewrite countBs to make use of this new function.  
*/

function CharCounter(countString, charToCount){
    let countChar = 0;
    for(let i = 0; i < countString.length; i++ ) {
        if(countString[i] == charToCount) {
            countChar++;
        }
    }
    return countChar;
}

function BCounterBetter(countString, charToCount) {
    let countB = 0;
    for(let i = 0; i < countString.length; i++ ) {
        if(countString[i] == charToCount) {
            countB++;
        }
    }
    return countB;
}

console.log(CharCounter("kakkerlak", "k"));  // 4
console.log(BCounterBetter("BBACABbbAA", "A")); // 4