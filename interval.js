 
var cancellable = function(fn, args, t) {
    fn(...args);
    let timer = setInterval(() => fn(...args), t);

    let cancelFn = () => clearInterval(timer);
    return cancelFn;
}; 

   const result = []
   const fn = (x) => x * 2
   const args = [4], t = 35, cancelT = 190
   const start = performance.now()
   const log = (...argsArr) => {
       const diff = Math.floor(performance.now() - start)
       result.push({"time": diff, "returned": fn(...argsArr)})
   }     
   const cancel = cancellable(log, args, t);
   setTimeout(() => {
      cancel()
   }, cancelT)
   setTimeout(() => {
     console.log(result)             
   }, cancelT + t + 15)    
  