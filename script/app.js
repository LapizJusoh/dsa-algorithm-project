// recursions - previous call

//Question 1 - sum all numbers
function sumRange(num, total = 0) {
  if (num === 1) return total + num;

  return sumRange(num - 1, (total = total + num));
}

//Question 2 - power function

function pow(base, exponent) {
  if (exponent === 1) return base;
  return base * pow(base, exponent - 1);
}

//Question 3 - Factorial
// factorial(5); // 5 * 4 * 3 * 2 * 1 === 120

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

//Question 4 - check all values in array
/*
Write a function called all which accepts an array and a callback and
returns true if every value in the array returns true when passed as
parameter to the callback function
*/

function all(array, func, lastIndex = array.length - 1) {
  if (func(array[lastIndex])) {
    if (lastIndex === 0) return true;
    return all(array, func, (lastIndex = lastIndex - 1));
  }
}

//Question 5 - product of an array

function productOfArray(array, total = 1, lastIndex = array.length - 1) {
  if (lastIndex === 0) return total * array[lastIndex];

  return total * array[lastIndex] * productOfArray(array, total, lastIndex - 1);
}

//Question 6 - contains();
// Write a function called contains that searches for a value in a nested object.
// It returns true if the object contains that value.

function contains(obj, targetValue) {
  // because `null` has a typof "object", we have to explicitly check
  // to prevent trying to access `null`'s values (which don't exist)
  if (typeof obj !== "object" || obj === null) return obj === targetValue;

  for (const value of Object.values(obj)) {
    if (contains(value, targetValue)) return true;
  }

  return false;
}

//Question 7 - Parse a multi-dimensional array
//Given a multi-dimensional integer array, return the total number of integers stored inside this array



function totalIntegers(array) {
  let tempArray = array;
  if(tempArray.length===0) return 0;

  
  let total = 0;
  let first = tempArray.shift();

  if(Array.isArray(first)) {
    total+=totalIntegers(first);
  } else if(typeof first==='number') total+= 1;
  
  return total + totalIntegers(tempArray);
}
// fibonacci project

function fib(num) {
  let testArray=[];

  for(let i=0;i<num;i++) {
    if(i===0) {
      testArray.push(0)
    } else if(i===1) {
      testArray.push(1)
    } else {
      testArray[i] = testArray[i-1] + testArray[i-2];
    }
  }

  return testArray;
}

function fibRecs(num,testArr=[]) {
  
  if(num===1) return [0];
  if(num===2) {
    testArr.unshift(0,1);
    return testArr;
  }

  function getFibValue(n) {
    if(n<2) return n;
    return getFibValue(n-1) + getFibValue(n-2);
  }

  testArr.unshift(getFibValue(num));
  return fibRecs(num-1,testArr);
} //my solution

/*
Optimal solution

function fibs(noOfElements, arr = [0, 1]) {
  
  if(noOfElements < 0) {
    throw new Error("Pls enter a valid positive number")
  }
  if(noOfElements===0) {
    return [];
  }
  if(noOfElements === 1) {
    return [0];
  }
  if (noOfElements === 2) {
    return arr;
  }
  if (arr.length >= 2) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }
  
  return fibs(noOfElements-1,arr);
}

*/

// Merge Sort project

function mergeSort(arr, startingIndex=0) {

  while(startingIndex!= arr.length && arr[startingIndex]>Math.min(...arr.slice(startingIndex))) {
    let firstMinValue = Math.min(...arr.slice(startingIndex));
    let firstMinIndex = arr.slice(startingIndex).indexOf(firstMinValue) + startingIndex;

    [arr[firstMinIndex],arr[startingIndex]] = [arr[startingIndex],arr[firstMinIndex]];
    startingIndex++;
  }


  return arr;
}

function mergeSortRecs(arr,finalArr=[]) {
  let tempArr=arr;

  if(tempArr.length===0) return finalArr;
  if(tempArr.length>=1) {
    finalArr.push(Math.min(...tempArr));
    tempArr.splice(tempArr.indexOf(Math.min(...tempArr)),1);
  }

  return mergeSortRecs(tempArr,finalArr);
}

console.log(mergeSortRecs([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSortRecs([105, 79, 100, 110]));