/* Write a range function that takes two arguments, start and end,
and returns an array containing all the numbers from start up to (and including) end.
*/

function Range(start, end) {
    let rangeArr = [];
    startParsed = parseFloat(start);
    endParsed = parseFloat(end);

    if(start <= end){
        for(let i = start; i <= end; i++){
            rangeArr.push(i);
        }
    }
    else if(startParsed > endParsed) {
        for(let i = startParsed; i >= endParsed; i--){
            rangeArr.push(i);
        }
    }

    return rangeArr;
}

console.log(Range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(Range(5, 2, -1));
// → [5, 4, 3, 2]

/*
Next, write a sum function that takes an array of numbers
and returns the sum of these numbers. 
*/

function Sum(numbersArr) {
    let sum = 0;
    for(let i = 0; i < numbersArr.length; i++) {
        sum += numbersArr[i];
    }
    return sum;
}

console.log(Sum(Range(1, 10)));
// → 55

//asdasd