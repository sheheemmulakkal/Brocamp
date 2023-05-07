class Stack {
    constructor(){
        this.items = []
    }

    push(element){
        this.items.push(element)
    }

    pop(){
        this.items.pop()
    }

    peek(){
        return this.items[this.items.length-1]
    }

    print(){
        console.log(this.items.toString());
    }

}

const stack = new Stack()

stack.push(10)
stack.push(20)
// stack.pop()
stack.push(30)
stack.print()
console.log(stack.peek());