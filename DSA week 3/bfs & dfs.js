bfs(startV) {
    if (!this.list[startV]) {
        return null
    }

    const queue = [startV]
    const visited = new Set()
    visited.add(startV)

    while (queue.length > 0) {
        const vertex = queue.shift()
        console.log(vertex)


        for (const neighbor of this.list[vertex]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor)
                queue.push(neighbor)
            }
        }
    }
}

dfs(startV) {
    if (!this.list[startV]) {
        return null
    }

    const visited = new Set()
    this.helper(startV, visited)
}

    helper(v, visited) {
        visited.add(v)
        console.log(v);


    for (const neighbor of this.list[v]) {
        if (!visited.has(neighbor)) {
            this.helper(neighbor , visited)
        }
    }
}


// Chat gpt
dfs(startV) {
    if (!this.adjacencyList[startV]) {
      return null;
    }
  
    const visited = new Set();
    this.helper(startV, visited);
  }
  
  helper(v, visited) {
    visited.add(v);
    console.log(v);
  
    for (const neighbor of this.adjacencyList[v]) {
      if (!visited.has(neighbor)) {
        this.helper(neighbor, visited);
      }
    }
  }

  dfs(startVertex){
    if(!this.adjacentList[startVertex]){
        return null
    }
    const visited = new Set()
    this.helper(startVertex, visited)
  }

  helper(vertex, visited){
    visited.add(vertex)
    console.log(vertex)

    for(let adjacent of adjacnetList[vertex]){
        if(!visited.has(adjacent)){
            this.helper(adjacent, visited)
        }
    }
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