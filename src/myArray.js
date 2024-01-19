class MyArray {
    constructor() {
        this.data = {};
        this.length = 0;
    } 

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        const item = this.data[index];
        this.shiftItems(index); 
        return item;   
    }

    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

const arr = new MyArray();
arr.push('Test 1');
arr.push('Test 2');
arr.push('Test 3');
arr.delete(1);
arr.push('Test 4');
arr.push('Test 5');
arr.pop();
console.log(arr.data, arr.length);