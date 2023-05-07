class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class Stack {
    constructor(){
        this.top = null
    }

    push (value){
        const node = new Node(value)
        
            node.next = this.top
            this.top = node

    }

    pop () {
        if(this.top === null){
            console.log('Stack is empty');
        } else {
            const removedNode = this.top
            this.top = removedNode.next
            removedNode.next = null
            return removedNode.value
        }


    }

    peek(){
        return this.top.value
    }

    print(){
        if(this.top === null){
            console.log('Stack is empty');
        } else {
            let curr = this.top
            while(curr){
                console.log(curr.value);
                curr = curr.next
            }
        }
    }
}

const stack = new Stack()

stack.push(10)
stack.push(20)
stack.print()
stack.push(30)
console.log(stack.pop());
console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());