class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    enqueue(value){
        const node = new Node(value)
        if(this.head === null){
            this.head = node;
            this.tail = node
        } else {
            this.tail.next = node 
            this.tail = node
        }
    }

    dequeue(){
        if(this.head === null){
            console.log('Queue is empty');
        } else {
            let rNode = this.head
            this.head = rNode.next
            rNode.next = null
            return rNode.value
        }
    }

    peek(){
        if(this.head === null){
            console.log('Queue is empty');
        } else {
            return this.head.value;
        }
    }
    
    print(){
        if(this.head === null){
            console.log('Queue is empty');
        } else {
            let curr = this.head;
            while(curr){
                console.log(curr.value);
                curr = curr.next;
            }
        }
    }
}


const queue = new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
queue.dequeue()
queue.dequeue()
// queue.dequeue()
console.log(queue.peek());

queue.print()