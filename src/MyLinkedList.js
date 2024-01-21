class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    //O(1)
    append(value) {
        const newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    //O(1)
    prepend(value) {
        const newNode = {
            value: value,
            next: null
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    //O(n) need to traverse
    printList() {
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array;
    }

    //O(n) need to traverse
    insert(index, value){
        if (index > this.length) {
            return this.append(value);
        }
        const newNode = { value, next: null };
        const leader = this._traverseToIndex(index);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.printList();
    }

    //O(n) need to traverse
    remove(index) {
        if (index >= this.length) return null;
        const nodeBefore = this._traverseToIndex(index - 1);
        const nodeToDelete = nodeBefore.next;
        nodeBefore.next = nodeToDelete.next;
        this.length--;
        return nodeToDelete
    }

    _traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while(counter < index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
}
  
let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(4, 88);
myLinkedList.remove(3);
console.log(myLinkedList.printList());

  
  
  
  