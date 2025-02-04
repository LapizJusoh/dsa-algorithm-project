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