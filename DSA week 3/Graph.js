class Graph {
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
        }
    }

    addEdge(vertex1, vertex2){
         if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
         }
         if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
         }
         this.adjacencyList[vertex1].add(vertex2)
         this.adjacencyList[vertex2].add(vertex1)
    }

    hasEdge(vertex1, vertex2){
        return (
            this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1)
        )
    }

    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex){
        if(!this.adjacencyList){
            return 
        }
        for( let adjacentVertex of this.adjacencyList[vertex]){
            this.removeEdge(adjacentVertex, vertex)
        } 
        delete this.adjacencyList[vertex]
    }

    BFS(startVertex){
        if(!this.adjacencyList[startVertex]){
            return null
        }

        const queue = [startVertex]
        const visited = new Set()
        visited.add(startVertex)

        while(queue.length){
            let vertex = queue.shift()
            console.log(vertex);

            for(let adjacentVertex of this.adjacencyList[vertex]){
                if(!visited.has(adjacentVertex)){
                    visited.add(adjacentVertex)
                    queue.push(adjacentVertex)
                }
            }
        }
    }

    DFS(startVertex){
        if(!this.adjacencyList[startVertex]){
            return null
        }
        const visited = new Set()
        this.DFShelper(startVertex, visited)
    }

    DFShelper(vertex, visited){
        visited.add(vertex)
        console.log(vertex);
        for(let adjacent of this.adjacencyList[vertex]){
            if(!visited.has(adjacent)){
                this.DFShelper(adjacent, visited)
            }
        }
    }

    display(){
        for(let i in this.adjacencyList){
            console.log(i + ' --> ' + [...this.adjacencyList[i]]);
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
// g.removeEdge('Sheheem', 'jaseem')
console.log(g.hasEdge('favas','Sheheem'));
// g.removeVertex('fadil')
g.BFS('fadil')
g.display()
g.DFS('Sheheem')
// const graph = new Graph()

// graph.addVertex('Sheheem')
// graph.addVertex('Fadil')
// graph.addVertex('Favas')
// graph.addVertex('Jaseem')

// graph.addEdge('Sheheem', 'Fadil')
// graph.addEdge('Jaseem', 'Fadil')
// graph.addEdge('Sheheem', 'Favas')
