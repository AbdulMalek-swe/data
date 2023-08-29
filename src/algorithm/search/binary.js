function binarySearch(targetValue,arr) {
    let left = 0;
    let right = arr.length - 1;
    while(left<=right){
        let mid = Math.floor((left + right) / 2);
      if(arr[mid]===targetValue){
        return arr[mid]
      }
      if(targetValue<arr[mid]){
      right = mid-1;
      }
      else{
        left = mid+1
      }
    }
    return -1;
       
}
const arr = [1, 2, 3, 5, 7, 9, 11]; 
const targetValue = 9;
const result = binarySearch(targetValue,arr)
if (result !== -1) {
    console.log(`Target ${targetValue} found at index ${result}`);
} else {
    console.log(`Target ${targetValue} not found in the array`);
}