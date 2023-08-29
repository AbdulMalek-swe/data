  function linearSearch (target,arr){
   for(let i=0;i<arr.length;i++){
     if(arr[i]===target){
        return  i;
     }
   }
   return -1
 }
 const target = 12;
 const arr=[1,2,3,4,44,3,12]
 const result = linearSearch(target,arr)
 if (result !== -1) {
    console.log(`Target ${target} found at index ${result}`);
} else {
    console.log(`Target ${target} not found in the array`);
}