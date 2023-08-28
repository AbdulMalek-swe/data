class Stack{
    constructor() {
        this.items=[]
    }
    push(item){
        this.items.push(item)
    }
    pop(){
       if(this.items.length===0){
        return ""
       } 
       return this.items.pop()
    }
    peek(){
       return this.items[this.items.length-1] 
    }
    isEmpty(){
        return !this.items.length;
    }
    printStack()
{
    var str = "";
    for (var i = 0; i < this.items.length; i++)
        str += this.items[i] + " ";
    return str;
}
size() {
    return this.items.length;
  }
}
 function postFixEvaluation(exp){
    var stack = new Stack();
    for(let i=0;i<exp.length;i++){
        const c = exp[i];
        if(!isNaN(c)){    
         stack.push(c - '0');
      }
      else{
        var val1 = stack.pop();
        var val2 = stack.pop();
        
        switch (c) {
            case '+':
                stack.push(val2 + val1);
                break;
 
            case '-':
                stack.push(val2 - val1);
                break;
 
            case '/':
                stack.push(val2 / val1);
                break;
 
            case '*':
                stack.push(val2 * val1);
                break;
            }
      }
    }
    return stack.pop()
 }
console.log(postFixEvaluation("1668888888888888888888787787878787878++++**++++++++++++*"));

// const stack = new Stack()
// console.log(stack.isEmpty());
//  stack.push("abdul malek")
//  console.log(stack.pop());
//  stack.push("nahid hasan")
//  console.log(stack.pop());
//  console.log(stack.peek()); 
//  console.log(stack.peek()); 
//  stack.push("noman shafi")
//  console.log(stack.isEmpty());
//  console.log(stack.printStack());
//  console.log(stack.items);
