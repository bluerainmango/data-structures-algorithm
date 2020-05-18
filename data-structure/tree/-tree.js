//level 0: 2^0 = 1; two to the power of zero is 1
//level 1: 2^1 = 2;
//level 2: 2^2 = 4
//level 3: 2^3 = 8

//# of nodes = 2^h - 1   //h = 1 ~
// log nodes = steps
// log 100 = 2 왜냐면 10^2 = 100;
class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (!this.root) {
      const newNode = new Node(value);
      this.root = newNode;
      return;
    }

    const newNode = new Node(value);

    let currentNode = this.root;
    let direction;

    while (!currentNode[direction]) {
      if (value === currentNode.value) {
        return;
      } else if (value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = newNode;
        } else {
          currentNode = currentNode.right;
          if (value > currentNode.value) {
            direction = "right";
          } else if (value < currentNode.value) {
            direction = "left";
          } else {
            return;
          }
        }
      } else {
        if (!currentNode.left) {
          currentNode.left = newNode;
        } else {
          currentNode = currentNode.left;
          if (value > currentNode.value) {
            direction = "right";
          } else if (value < currentNode.value) {
            direction = "left";
          } else {
            return;
          }
        }
      }
    }
  }
  lookup(value) {
    //Code here
  }
  // remove
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
// tree.insert(170)
// tree.insert(15)
// tree.insert(1)
JSON.stringify(traverse(tree.root));

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
