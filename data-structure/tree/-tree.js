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
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          //Left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          //Right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  //! while(true) 알기 전 내 solution
  //   insert(value){
  //     if(!this.root){
  //       const newNode = new Node(value);
  //       this.root = newNode;
  //       return;
  //     }

  //   const newNode = new Node(value);

  //   let currentNode = this.root;
  //   let direction;

  //   while(!currentNode[direction]){
  //     if(value === currentNode.value){
  //       return
  //     }
  //     else if(value > currentNode.value){
  //       if(!currentNode.right){
  //         currentNode.right = newNode;
  //       }else{
  //         currentNode = currentNode.right;
  //         if(value > currentNode.value){
  //           direction = "right"
  //         }else if(value < currentNode.value){
  //           direction = "left"
  //         }else{
  //           return;
  //         }
  //       }

  //     }else{
  //       if(!currentNode.left){
  //             currentNode.left = newNode;
  //           }else{
  //             currentNode = currentNode.left;
  //             if(value > currentNode.value){
  //               direction = "right"
  //             }else if(value < currentNode.value){
  //               direction = "left"
  //             }else{
  //               return;
  //             }
  //           }
  //     }

  // }
  //   }

  lookup(value) {
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.value < value) {
        currentNode = currentNode.right;
      } else if (currentNode.value > value) {
        currentNode = currentNode.left;
      } else {
        return currentNode;
      }
    }

    return null;
  }

  //! Andrei's solution
  // nested loop 때문에 O(n^2)
  remove(value) {
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;
    let parentNode = null;

    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }

  //! 내 Solution
  remove(value) {
    let prevNode = null;
    let direction = null;
    let found = false;
    let targetNode = null;
    let currentNode = this.root;

    if (!currentNode) {
      return false;
    }
    if (currentNode.value === value) {
      currentNode = null;
      return null;
    }

    while (currentNode) {
      if (value > currentNode.value && currentNode.right) {
        prevNode = currentNode;
        direction = "right";
        currentNode = currentNode.right;
      } else if (value < currentNode.value) {
        //* 이미 match된 노드를 찾은 뒤에 도는 loop일 시,
        if (!currentNode.left && found) {
          //* 1. target 노드의 값만 가장 작은 대체값으로 바꿔치기
          targetNode.value = currentNode.value;

          //* 2. 가장 작은 대체값 처리하기(삭제 or 자식들 살려두기)
          // target.right이 더 작은 수를 가지고 있으냐 없으냐에 따라 삭제 값이 달라짐
          // 또 이 더 작은 수가 큰 수를 자식으로 가지고 있으면 이건 또 null이 아니라 살려야 함.
          if (targetNode.right.left) {
            if (currentNode.right) {
              prevNode[direction] = currentNode.right;
            } else {
              prevNode[direction] = null;
            }
          } else {
            targetNode[direction] = null;
          }
          return;
        }

        if (!currentNode.left && !found) {
          return false;
        }

        prevNode = currentNode;
        direction = "left";
        currentNode = currentNode.left;

        //* 드디어 value가 match 될 때
      } else if (currentNode.value === value) {
        //1. match된 노드의 자식이 존재하지 않을때
        if (!currentNode.right && !currentNode.left) {
          prevNode[direction] = null;
          return;
        }

        //2. match된 노드의 오른쪽 자식이 존재할때(왼&&오 || 오)
        if (currentNode.right) {
          // find the smallest num
          found = true;
          targetNode = currentNode;
          currentNode = currentNode.right;

          //3. match된 노드의 오른쪽 자식이 존재하지 않을 때(왼)
        } else {
          // left num
          prevNode.right = currentNode.left;
          return;
        }
      } else {
        return false;
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
tree.insert(100);
tree.insert(120);
tree.insert(15);
tree.insert(1);
tree.remove(172);
JSON.stringify(traverse(tree.root));
// tree.lookup(171)

//     9
//  4     20
//1  6  15  170
//        100
//         120
function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
