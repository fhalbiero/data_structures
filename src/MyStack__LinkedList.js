class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}
  
class Stack {
    constructor() {
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.top = node;
            this.bottom = node;
        } else {
            const tmp = this.top;
            this.top = node;
            this.top.next = tmp;
        }
        this.length++;
        return this.top;
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        const tmp = this.top;
        this.top = this.top.next;
        this.length--;
        return tmp;
    }

    isEmpty() {
        return this.length === 0;
    }
}
  
const myStack = new Stack();
console.log(myStack.push("google"));
console.log(myStack.push("udemy"));
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack);