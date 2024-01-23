class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
  
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const node = new Node(value);
        if (!this.root) {
            this.root = node;
        } else {
            let current = this.root;
            while (current) {
                if (value > current.value) {
                    if (!current.right) {
                        current.right = node;
                        return node;
                    } 
                    current = current.right;    
                } else {
                    if (!current.left) {
                        current.left = node;
                        return node;
                    } 
                    current = current.left; 
                }
            }
        }
    }

    lookup(value) {
        if (!this.root) return null;
        let current = this.root;
        while (current) {
            if (value > current.value) {
                current = current.right;    
            } else if (value < current.value) {
                current = current.left; 
            } else {
                return current;
            }
        }
        return null;
    }
  
    remove(value) {
        if (!this.root) return null;
        let current = this.root;
        let parent = null;
        while (current) {
            if (value < current.value) {
                parent = current;
                current = current.left;
            } else if (value > current.value) {
                parent = current;
                current = current.right;
            } else if (current.value === value) {
                //No right child:
                if (current.right === null) {
                    if (parent === null) {
                        this.root = current.left;
                    } else {
                    //if parent > current value, make current left child a child of parent
                    if (current.value < parent.value) {
                        parent.left = current.left;
        
                        //if parent < current value, make left child a right child of parent
                    } else if (current.value > parent.value) {
                        parent.right = current.left;
                    }
                }
                //Right child which doesnt have a left child
                } else if (current.right.left === null) {
                    current.right.left = current.left;
                    if (parent === null) {
                        this.root = current.right;
                    } else {
                        //if parent > current, make right child of the left the parent
                        if (current.value < parent.value) {
                            parent.left = current.right;
                            //if parent < current, make right child a right child of the parent
                        } else if (current.value > parent.value) {
                            parent.right = current.right;
                        }
                    }
                //Right child that has a left child
                } else {
                    //find the Right child's left most child
                    let leftmost = current.right.left;
                    let leftmostParent = current.right;
                    while (leftmost.left !== null) {
                        leftmostParent = leftmost;
                        leftmost = leftmost.left;
                    }
                    //Parent's left subtree is now leftmost's right subtree
                    leftmostParent.left = leftmost.right;
                    leftmost.left = current.left;
                    leftmost.right = current.right;
        
                    if (parent === null) {
                        this.root = leftmost;
                    } else {
                        if (current.value < parent.value) {
                            parent.left = leftmost;
                        } else if (current.value > parent.value) {
                            parent.right = leftmost;
                        }
                    }
                }
                return true;
            }
        }
    }

}
  
const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(tree.lookup(20));
tree.remove(170);
console.log(JSON.stringify(traverse(tree.root)));
//     9
//  4     20
//1  6  15  170

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}