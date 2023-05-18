// console.log('hi');

// class Node {
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedList {
//     constructor(){
//         this.head = null
//         this.tail = null
//         this.size = null
//     }

//     push(value){
//         const node = new Node(value)
//         if(this.head === null){
//             this.head = node
//             this.tail = node
//         } else {
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }

//     append(value){
//         const node = new Node(value)
//         if(this.head === null){
//             this.head = node
//             this.tail = node
//         } else {
//             this.tail.next = node
//             this.tail = node
//         }
//         this.size++
//     }

//     display(){
//         if(this.head === null){
//             console.log('List is empty');
//         } else {
//             let curr = this.head
//             while(curr){
//                 console.log(curr.value)
//                 curr = curr.next
//             }
//         }
//     }
// }

// const l1 = new LinkedList()
// const l2 = new LinkedList()

// l1.push(2)
// l1.push(4)
// l1.push(3)

// l2.push(5)
// l2.push(6)
// l2.push(4)

// l1.display()
// l2.display()
// console.log();


// addTwoNumbers(l1,l2)
// console.log('ho');

// function addTwoNumbers(l1,l2) {
//     console.log('hi');

//     let curr1 = l1.head
//     let curr2 = l2.head
//     console.log(curr1);
    
//     while(curr1 && curr2){
//         let n1 = curr1.value.toString().split('').length
//         let n2 = curr2.value.toString().split('').length

//         if(n1 === 2 || n2 === 2){

//         }

//         curr1 = curr1.next
//         curr2 = curr2.next
//     }
   
// }


function product(nums){
    let count = 0
    for(let i=0; i<nums.length; i++){
        if(nums[i] === 0){
            return 0
        }
        if(nums[i] < 0){
            count++
        }
    }

    if(count )

}

console.log(product([1,1,1,2,1,5,5]));