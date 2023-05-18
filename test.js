// // // class Node {
// // //     constructor(value){
// // //         this.value = value
// // //         this.next   = null
// // //     }
// // // }

// // // class Stack {
// // //     constructor(){
// // //         this.top = null
// // //         this.size = 0
// // //     }

// // //     push(value){
// // //         const node = new Node(value)

// // //         if(this.top === null){
// // //             this.top = node
// // //         } else {
// // //             node.next = this.top 
// // //             this.top = node
// // //         }
// // //         this.size++
// // //     }

// // //     pop(){
// // //         if(this.top === null){
// // //             console.log('Stack is empty');
// // //         } else {
// // //             let rNode = this.top
// // //         this.top = rNode.next
// // //         rNode.next = null
// // //         this.size--
// // //         return rNode.value
// // //         }
// // //     }



// // //     display(){
// // //         let curr = this.top
// // //         while(curr){
// // //             console.log(` ${curr.value}`);
// // //             curr = curr.next
// // //         }
// // //     }
// // // }

// // // const st1 = new Stack()
// // // const temp = new Stack()



// // // function middle(){
// // //     let mid =  Math.floor(st1.size/2)

// // //     for(let i=0; i<mid; i++){
// // //         temp.push(st1.pop())
// // //     }
// // //     st1.pop()

// // //     for(let i=0; i<mid; i++){
// // //         st1.push(temp.pop())
// // //     }

// // // }


// // // st1.push(10)
// // // st1.push(20)
// // // st1.push(30)
// // // st1.push(40)
// // // st1.push(50)
// // // middle()

// // // st1.display()


// // // // let array = [61]
// // // // let array2 = [61]
// // // // let n = array[0].toString().split('')
// // // // let n2 = array2[0].toString().split('')
// // // // console.log(n[3] + n2[1]);








// // // // function sample(nums1,nums2){
// // // //     let count = 0
// // // //     let k = 0
// // // //     console.log(k);
// // // //     for(let i=0; i<nums1.length; i++){
// // // //         for(let j=k; j<nums2.length; j++){
// // // //             if(nums1[i] === nums2[j]){
// // // //                 console.log(nums1[i]+' ...i-'+i + ' : ' +" ..j-;"+j+' '+ nums2[j] + ", ");
// // // //                 count++
// // // //                 k=i+1
// // // //                 j=k
// // // //                 console.log(i,k);
// // // //                 break;
// // // //             }
// // // //         }
// // // //     }
// // // //     return count
// // // // }

// // // // a1 = [2,1]
// // // // b = [1,2,1,3,3,2]

// // // // console.log(sample(a1,b));


// // // salary = [100,200,300,400,500,600]
// // // function average(salary){
// // //     let sum = 0
// // //     if(salary[0] < salary[1]){
// // //         s = salary[0]
// // //         l = salary[1]
// // //         console.log();
// // //     } else {
// // //         s = salary[1]
// // //         l = salary[0]
// // //     }

// // //     for(let i=0; i<salary.length; i++){
// // //         if(salary[i] < s){
// // //             s = salary[i]
// // //         }
// // //         if(salary[i] > l){
// // //             l = salary[i]
// // //         }
// // //         sum += salary[i]
// // //     }

// // //     avg = ( (sum - l - s) / (salary.length - 2) )
// // //     return avg
// // // }

// // // console.log(average(salary));


// // class Node {
// //     constructor(value){
// //         this.value = value
// //         this.left = null
// //         this.right = null
// //     }
// // }

// // class BinarySearchTree {
// //     constructor(){
// //         this.root = null
// //     }

// //     insert(value){
// //         const node = new Node(value)
// //         if(this.root === null){
// //             this.root = node
// //         } else {
// //             this.insertNode(this.root, node)
// //         }
// //     }

// //      insertNode(root, node){
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
// //      }

// //      search(root, value){
// //         if(!root){
// //             return false
// //         } else {
// //             if(root.value === value){
// //                 return true
// //             } else if(value < root.value){
// //                 return this.search(root.left, value)
// //             } else {
// //                 return this.search(root.right, value)
// //             }
// //         }
// //      }
// // }

// // const bst = new BinarySearchTree()

// // bst.insert(10)
// // bst.insert(15)
// // bst.insert(5)

// // console.log(bst.search(bst.root, 20));


// class Node {
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class BinarySearchTree {
//     constructor(){
//         this.root = null
//     }

//     insert(value){
//         const node = new Node(value)
//         if(this.root === null){
//             this.root = node
//         } else {
//             this.insertNode(this.root, node)
//         }
//     }

//     insertNode(root, node){
//         if(node.value < root.value){
//             if(root.left === null){
//                 root.left = node
//             } else {
//                 this.insertNode(root.left, node)
//             }
//         } else {
//             if(root.right === null){
//                 root.right = node
//             } else {
//                 this.insertNode(root.right, node)
//             }
//         }
//     }

//     search(root, value){
//         if(!root){
//             return false
//         } else {
//             if(root.value === value){
//                 return true
//             } else if(value < root.value){
//                 return this.search(root.left, value)
//             } else {
//                 return this.search(root.right, value)
//             }
//         }
//     }

//     preOrder(root){
//         if(root){
//         console.log(root.value);
//         this.preOrder(root.left)
//         this.preOrder(root.right)
//         }
//     }

//     postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value);
//         }
//     }

//     inOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             console.log(root.value);
//             this.inOrder(root.right)
//         }
//     }

//     levelOrder(){
//         const queue = []
//         queue.push(this.root)
//         while(queue.length){
//             let curr = queue.shift()
//             console.log(curr.value);
//             if(curr.left){
//                 queue.push(curr.left)
//             } 
//             if(curr.right){
//                 queue.push(curr.right)
//             }
//         }
//     }

//     min(root){
//         if(!root.left){
//             return root.value
//         } else {
//             return this.min(root.left)
//         }
//     }

//     max(root){
//         if(!root.right){
//             return root.value
//         } else {
//             return this.max(root.right)
//         }
//     }
// }

// const bst = new BinarySearchTree()

// bst.insert(15)
// bst.insert(4)
// bst.insert(25)
// bst.insert(26)
// bst.insert(26)
// bst.insert(8)
// bst.insert(1)
// bst.insert(10)
// bst.levelOrder()
// console.log(bst.min(bst.root));
// console.log(bst.max(bst.root));

// bst.preOrder(bst.root)
// bst.postOrder(bst.root)
// bst.inOrder(bst.root)
// console.log(bst.search(bst.root, 29));


// let person = {}

// person['a'] = new Set()
// person['b'] = new Set()
// person['a'].add('b')
// person['b'].add('a')


// console.log(person);

class Graph {
    constructor(){
        this.adjacentList = {}
    }

    addVertex(vertex){
        if(!this.adjacentList[vertex]){
            this.adjacentList[vertex] = new Set()
        }
    }

    addEdge(vertex1, vertex2){

        if(!this.adjacentList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacentList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacentList[vertex1].add(vertex2)
        this.adjacentList[vertex2].add(vertex1)
    }

    hasEdge(vertex1, vertex2){
        return (
            this.adjacentList[vertex1].has(vertex2) &&
            this.adjacentList[vertex2].has(vertex1)
        )
    }

    removeEdge(vertex1, vertex2){
        this.adjacentList[vertex1].delete(vertex2)
        this.adjacentList[vertex2].delete(vertex1)
    }

    removeVertex(vertex){
        if(!this.adjacentList[vertex]){
            return
        }

        for(let adjacentVertex of this.adjacentList[vertex]){
            this.removeEdge(adjacentVertex, vertex)
        }
        delete this.adjacentList[vertex]
    }

    BFS(startVertex){
        if(!this.adjacentList[startVertex]){
            return null
        }

        const queue = [startVertex]
        const visited = new Set()
        visited.add(startVertex)

        while(queue.length){
            let vertex = queue.shift()
            console.log(vertex);

            for(let adjacentVertex of this.adjacentList[vertex]){
                if(!visited.has(adjacentVertex)){
                    visited.add(adjacentVertex)
                    queue.push(adjacentVertex)
                }
            }
        }
    }

    DFS(startVertex){
        if(!this.adjacentList[startVertex]){
            return null
        }

        const visited = new Set()
        this.DFShelper(startVertex, visited)
    }

    DFShelper(vertex, visited){
        visited.add(vertex)
        console.log(vertex);

        for(let adjacent of this.adjacentList[vertex]){
            if(!visited.has(adjacent)){
                this.DFShelper(adjacent, visited)
            }
        }
    }

    display(){
        for(let i in this.adjacentList){
            console.log(i + ' --> '+[...this.adjacentList[i]]);
        }
    }
}

const g = new Graph()
g.addVertex('Sheheem')
g.addVertex('favas')
g.addVertex('fadil')
g.addVertex('jaseem')

g.addEdge('Sheheem','favas')
g.addEdge('Sheheem','fadil')
g.addEdge('Sheheem','jaseem')
g.addEdge('fadil','jaseem')
// g.removeVertex('favas')
g.BFS('fadil')
g.DFS('fadil')
// g.removeEdge('Sheheem', 'favas')
g.display()
// console.log(g.hasEdge('Sheheem', 'jasee'));