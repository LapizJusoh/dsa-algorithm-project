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