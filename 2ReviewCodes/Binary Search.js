
const sortedArray = [1,2,3,4,5,6,7,8,9,10];

const binarySearch = (sortedArr, value) => {
  let start = 0;
  let end = sortedArr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (sortedArr[middle] !== value && start <= end) {
    if (value < sortedArr[middle]) {
      end = middle - 1;
    } else{
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  return sortedArray[middle] === value ? middle : -1;
}
console.log(binarySearch(sortedArray, 2));//1