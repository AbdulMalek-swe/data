class Queue{
    constructor(){
        this.items=[]
    }
    enqueue(element){
        this.items.push(element)
    }
    dequeue(){
        if(!this.items.length){
            return "queue is empty"
        }
        return this.items.shift()
    }
    peek(params){
        if(this.isEmpty){
            return "queue is an empty stack"
        }
      return this.items[params]
    }
    isEmpty(){
        return !this.items.length;
    }

// printQueue function
printQueue()
{
    var str = "";
    for(var i = 0; i < this.items.length; i++)
        str += this.items[i] +" ";
    return str;
}
}
const queue = new Queue();
queue.enqueue("abdul malek")
console.log(queue.printQueue());
console.log(queue.items,queue.dequeue(),queue.peek(0),queue.isEmpty());