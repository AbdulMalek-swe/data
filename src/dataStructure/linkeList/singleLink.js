class Node{
    constructor(data){
        this.data=data;
        this.next =null;
    }
}
class LinkedList{
    constructor( ) {
       this.head = null;
    }
    append(data){
        const newNode = new Node(data);
        // console.log(newNode);
        if(!this.head){
         return this.head = newNode;
        }
        let current = this.head;
        console.log(current);
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    
      display() {
        let current = this.head;
        while (current) {
        //   console.log(current.data);
          current = current.next;
        }
      }
}
const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.append(30); 
linkedList.display(); 