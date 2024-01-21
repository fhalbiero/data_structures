class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}
  
class Queue {
    constructor() {
      this.first = null;
      this.last = null;
      this.length = 0;
    }

    peek() {
        return this.first;
    }

    enqueue(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        this.length++;
        return node;
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        } 
        if (this.first === this.last) {
            this.last = null;
        }   
        const first = this.first;
        this.first = this.first.next;
        this.length--;
        return first;
    }

    isEmpty() {
        return this.length === 0;
    }

}
  
const myQueue = new Queue();
console.log(myQueue.enqueue("Jonh"));
console.log(myQueue.enqueue("Sara"));
console.log(myQueue.enqueue("Bob"));
console.log(myQueue.enqueue("Jenny"));
console.log('Peek --> ', myQueue.peek());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log('Peek --> ', myQueue.peek());
console.log(myQueue.dequeue());
console.log('Peek --> ', myQueue.peek());

console.log(myQueue);