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

  //! My Solution
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

  //! BFS regular version
  breadthFirstSearch() {
    //     9
    //  4     20
    //1  6  15  170

    // init: root인 9를 먼저 queue에 삽입
    let currentNode = this.root;
    let queue = [];
    queue.push(currentNode);

    // list는 모든 레벨을 돌며 queue에 저장됐던 자식 노드들의 value들만 모두 담은 list
    let list = [];

    while (queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.value);

      // 다음 레벨 돌때를 대비, 자식 노드들 queue 저장
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return list;
  }

  //* BFS recursion ver.
  breadthFirstSearchR(queue, list) {
    // regular 버전에서처럼 init으로 변수를 만들어주면, 모든 recursive call 에서 변수를 만들기에 안 좋다. 따라서 param으로 전달
    if (!queue.length) {
      return list;
    }

    let currentNode = queue.shift();
    list.push(currentNode.value);

    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }

    return this.breadthFirstSearchR(queue, list);
  }

  //     9
  //  4     20
  //1  6  15  170

  //* DFS 메소드 만드는 방법 3가지
  //*1. InORder - [1,4,6,9,15,20,170]
  //: 데이터 정렬 (왼쪽 컬럼 아래부터 root hit 후 또 다시 오른쪽 컬럼 맨 아래부터) | 왼자식 - 부모 - 오른자식
  //*2. PreOrder - [9,4,1,6,20,15,170]
  //: recreate tree하기 유용(실제 그리기 좋다는 뜻? 빗살무늬로 작대기 그려나가기 좋은 듯? | 부모 - 왼자식 - 오른자식
  //*3. PostOrder - [1,6,4,15,170,20,9] | 왼자식 - 오른자식 - 부모

  //* memory consumtion = height of tree : traverse 함수를 보면 tree 높이에 따라 recursion 수가 비례하기에. height이 너무 깊으면 call stack에 너무 많은 recursion call이 들어가 stack overflow.

  DFSInOrder() {
    return traverseInOrder(this.root, []);
  }
  DFSPostOrder() {
    return traversePostOrder(this.root, []);
  }
  DFSPreOrder() {
    return traversePreOrder(this.root, []);
  }
}

function traverseInOrder(node, list) {
  if (node.left) {
    traverseInOrder(node.left, list);
  }

  list.push(node.value);

  if (node.right) {
    traverseInOrder(node.right, list);
  }

  return list;
}

function traversePreOrder(node, list) {
  list.push(node.value);

  if (node.left) {
    traversePreOrder(node.left, list);
  }

  if (node.right) {
    traversePreOrder(node.right, list);
  }

  return list;
}

function traversePostOrder(node, list) {
  if (node.left) {
    traversePostOrder(node.left, list);
  }

  if (node.right) {
    traversePostOrder(node.right, list);
  }

  list.push(node.value);

  return list;
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
// tree.insert(100);
// tree.insert(120);
tree.insert(15);
tree.insert(1);
// tree.remove(172);
JSON.stringify(traverse(tree.root));
// tree.lookup(171)
tree.breadthFirstSearch();
tree.breadthFirstSearchR(tree.root, []);

console.log("DFSpre", tree.DFSPreOrder());
console.log("DFSin", tree.DFSInOrder());
console.log("DFSpost", tree.DFSPostOrder());

//     9
//  4     20
//1  6  15  170
//        100
//         120

//! recursion을 사용한 traverse
function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
