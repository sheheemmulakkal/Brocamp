class MaxBinaryHeap {
    constructor() {
      this.arr = [];
    }
  
    heapify(arr, n, i) {
      let largest = i;
      const left = 2 * i + 1;
      const right = 2 * i + 2;
  
      if (left < n && arr[left] > arr[largest]) {
        largest = left;
      }
  
      if (right < n && arr[right] > arr[largest]) {
        largest = right;
      }
  
      if (largest !== i) {
        let temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;
        this.heapify(arr, n, largest);
      }
    }
  
    insert(data) {
      this.arr.push(data);
      let i = this.arr.length - 1;
  
      while (i > 0) {
        const parent = Math.floor((i - 1) / 2);
        if (this.arr[i] <= this.arr[parent]) {
          break;
        }
        let temp = this.arr[i];
        this.arr[i] = this.arr[parent];
        this.arr[parent] = temp;
  
        i = parent;
      }
    }
  
    remove() {
      const n = this.arr.length;
      if (n === 0) {
        return null;
      }
      let max = this.arr[0];
      this.arr[0] = this.arr[n - 1];
      this.arr.pop();
      this.heapify(this.arr, n - 1, 0);
      return max;
    }
  
    heapSort() {
      const n = this.arr.length;
  
      for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        this.heapify(this.arr, n, i);
      }
  
      for (let i = n - 1; i > 0; i--) {
        let temp = this.arr[0];
        this.arr[0] = this.arr[i];
        this.arr[i] = temp;
        this.heapify(this.arr, i, 0);
      }
      return this.arr
    }
  }
  
  const h = new MaxBinaryHeap();
  h.insert(20);
  h.insert(34);
  h.insert(56);
  h.insert(76);
  h.insert(95);
  h.remove();
  console.log(h.arr);
  console.log(h.heapSort());