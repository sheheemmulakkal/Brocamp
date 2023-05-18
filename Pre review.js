// // class Node {
// //     constructor(value){
// //         this.value =value
// //         this.left = null
// //         this.right = null
// //     }
// // }

// // class BinarySearchTree{
// //     constructor(){
// //         this.root = null
// //         this.vOrderArray = []
// //     }

// //     insert(value){
// //         console.log('helloo');
// //         const node = new Node(value)
// //         if(this.root === null){
// //             this.root = node
// //         } else {
// //             this.insertNode(this.root, node)
// //         }
// //     }

// //     insertNode(root, node){
// //         if(node.value < root.value){
// //             if(root.left === null){
// //                 root.left = node
// //             } else {
// //                 this.insertNode(root.left, node)
// //             }
// //         } else {
// //             if(root.right === null){
// //                 root.right = node
// //             } else {
// //                 this.insertNode(root.right, node)
// //             }
// //         }
// //     }

// //     search(root, value){
// //         if(root === null){
// //             return false 
// //         } 

// //         if(root.value === value){
// //             return true
// //         } else if(value < root.value) {
// //             return this.search(root.left, value)
// //         } else {
// //             return this.search(root.right, value)
// //         }
// //     }

// //     preOrder(root){
// //         if(root){
// //             console.log(root.value)
// //             this.preOrder(root.left)
// //             this.preOrder(root.rigt)
// //         }
// //     }

// //     inOrder(root){
// //         if(root){
// //             this.inOrder(root.left)

// //             console.log(root.value);


// //             this.inOrder(root.right)
// //         }
// //     }

    
// //     isvalid(){
// //         this.vOrder(this.root,[])
// //     }

// //     vOrder(root,arr){
// //         while(root){
// //             this.vOrder(root.left,arr)

// //             console.log(root.value);
// //             arr.push(root.value)
            

// //             this.vOrder(root.right,arr)
// //         }

// //         console.log(arr);
// //     }
// //     postOrder(root){
// //         if(root){
// //             this.postOrder(root.left)
// //             this.postOrder(root.right)
// //             console.log(root.value);
// //         }
// //     }

    

// //     levelOrder(){
// //         const queue = []
// //         queue.push(this.root)
// //         while(queue.length){
// //             let current = queue.shift()
// //             console.log(current.value);
// //             if(current.left){
// //                 queue.push(current.left)
// //             } 
// //             if(current.right){
// //                 queue.push(current.right)
// //             }
// //         }
// //     }

// //     min(root){
// //         if(!root.left){
// //             console.log(root.value);
// //         } else {
// //             this.root(root.left)
// //         }
// //     }

// //     max(root){
// //         if(!root.right){
// //             console.log(root.value);
// //         } else {
// //             this.max(root.right)
// //         }
// //     }
    
// // }


// // const bst = new BinarySearchTree()

// // bst.insert(15)
// // bst.insert(25)
// // bst.insert(10)
// // bst.insert(26)
// // bst.insert(8)
// // console.log( bst.search(15));
// // bst.levelOrder()
// // bst.isvalid()
// // bst.inOrder(bst.root)



// class MaxHeap{
//     constructor(){
//         this.arr = []
//     }

//     heapify(arr, n, i){
//         let largest = i
//         let left = 2 * i + 1
//         let right = 2 * i + 2

//         if(left < n && arr[left] > arr[largest]){
//             largest = left
//         } 
//         if(right < n && arr[left] > arr[largest]){
//             largest = right
//         }

//         if(i !== largest){
//             [arr[i],arr[largest]] = [arr[largest], arr[i]]
//             this.heapify(arr, n , largest)
//         }
//     }

//     insert(data){
//         this.arr.push(data)
//         let i = arr.length-1
//         while(i > 0){
//             const parent = Math.floor((i-1)/2)
//             if(this.arr[i] <= this.arr[parent]){
//                 break
//             }

//             [arr[i],arr[parent]] = [arr[parent],arr[i]]
//         }
//         i = parent
//     }
// }

class Node {
    constructor(){
        this.children = {}
        this.isWord = false
    }
}

class Trie {
    constructor(){
        this.root = new Node()
    }

    insert(word){
        let curr = this.root
        for(let i=0; i<word.length; i++){
            let char = word[i]
            if(!curr.children[char]){
                curr.children[char] = new Node()
            }
            curr = curr.children[char]
        }
        curr.isWord = true
    }
}