class HashTable {
    constructor(size){
        this.table = Array(size)
        this.size = size
    }

    hash(key){
        let total = 0
        for(let i=0; i<key.length; i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set (key, value){
        const index = this.hash(key)
        let bucket = this.table[index]
        console.log(bucket);
        if(!bucket){
            this.table[index]=[[key,value]]
        } else {
            let sameKey = bucket.find(item => item[0] === key)
            if(sameKey){
                sameKey[1] = value
            } else {
                bucket.push([key,value])
            }
        }
    }

    get (key){
        const index = this.hash(key)
        let bucket = this.table[index]
        if(!bucket){
            return null
        } else {
            let sameKey = bucket.find(item => item[0] === key)
            if(sameKey){
                return sameKey[1]
            }
        }
    }

    display(){
        for(let i=0; i<this.table.length; i++){
            if(this.table[i]){
                console.log(i, this.table[i]);
            }
        }
    }
}

const hash = new HashTable(50)
hash.set('name','sheheem')
hash.set('mane','ashif')
hash.set('age',19)
hash.display()
console.log(hash.get('mane'));