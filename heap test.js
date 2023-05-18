class Heap {
    constructor(){
        this.arr = []
    }

    heapify(arr, n, i){
        let largest = i
        let left = 2 * i + 1
        let right = 2 * i + 1
        
        if(left < n && arr[left] > arr[largest]){
            largest = left
        }

        if(right < n && arr[left] > arr[largest]){
            largest = right
        }

        if(i !== largest){
            [arr[i],arr[largest]] = [arr[largest],arr[i]]
            this.heapify(arr,n,largest)
        }
    }

    insert(data){

        this.arr.push(data)
        let i = arr.length-1
        while(i>0){
            let parent = Math.floor((i-1)/2)

            if(arr[i] <= arr[parent]){
                break
            }
            [arr[i],arr[length]] = [arr[length],arr[i]]
            i = parent
        }
    }


}