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

const stack1 = new Stack()
const stack2 = new Stack()

stack1.push(10)
stack1.push(20)
stack1.push(30)
stack1.push(40)
stack1.push(50)
undo()
redo()
stack1.print()



// function middle(){
//     let curr = this.top
//     let count = 0
//     while(curr){
//         count++
//         curr = curr.next
//     }

//     mid = count/2
     
//     for(let i=1; i<mid; i++){
//         stack2.push(stack1.pop())
//     }
//     console.log(stack1.peek())
    
//     for(let i=1; i<mid; i++){
//         stack1.push(stack2.pop())
//     }
    
// }
//  middle() 
function undo(){
    stack2.push(stack1.pop())
}

function redo(){
    stack1.push(stack2.pop())
}