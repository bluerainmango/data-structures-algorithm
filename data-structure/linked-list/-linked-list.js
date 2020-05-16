//! Util
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//! 1. Singly Linked List
const LinkedList = class {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  //* Time complexity: O(1)
  append(value) {
    const newNode = new Node(value);
    // const newNode = {d
    //   value,
    //   next: null,
    // };

    this.tail.next = newNode;
    this.tail = this.tail.next;
    this.length++;

    return this;
  }

  //* Time complexity: O(1)
  prepend(value) {
    const newNode = {
      value,
      next: null,
    };

    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  //* Andrei solution
  //* Time complexity: O(n)
  //   insert(index, value) {
  //     //Check for proper parameters;
  //     if (index >= this.length) {
  //       return this.append(value);
  //     }

  //     const newNode = {
  //       value: value,
  //       next: null,
  //     };
  //     const leader = this.traverseToIndex(index - 1);
  //     const holdingPointer = leader.next;
  //     leader.next = newNode;
  //     newNode.next = holdingPointer;
  //     this.length++;
  //     return this.printList();
  //   }

  //   traverseToIndex(index) {
  //     //Check parameters
  //     let counter = 0;
  //     let currentNode = this.head;
  //     while (counter !== index) {
  //       currentNode = currentNode.next;
  //       counter++;
  //     }
  //     return currentNode;
  //   }

  //! my solution : Insert. 내 솔루션이 길긴하지만 invalid input에 더 나음
  insert(index, value) {
    let currentIndex = 0;
    let currentNode = this.head;

    if (index === 0) {
      this.length++;
      this.prepend(value);
      return this.printList();
    }

    if (index >= this.length) {
      this.length++;
      return this.append(value);
    }

    while (currentIndex <= index) {
      if (currentIndex === index - 1) {
        const newNode = {
          value,
          next: currentNode.next,
        };
        currentNode.next = newNode;
        this.length++;
      }
      currentIndex++;
      currentNode = currentNode.next;
    }

    return this.printList();
  }

  //* Andrei solution
  //* Time complexity: O(n)
  //   remove(index) {
  //     // Check Parameters
  //     const leader = this.traverseToIndex(index - 1);
  //     const unwantedNode = leader.next;
  //     leader.next = unwantedNode.next;
  //     this.length--;
  //     return this.printList();
  //   }

  //! my solution : Remove
  remove(index) {
    let currentIndex = 0;
    let currentNode = this.head;
    let prevNode = null;

    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return this.printList();
    }

    if (index >= this.length) {
      index = this.length - 1;
    }

    while (currentIndex <= index + 1) {
      if (currentIndex === index) {
        // when deleting last el
        if (currentIndex === this.length - 1) {
          prevNode.next = null;
          this.length--;
          return this.printList();
        }

        prevNode.next = currentNode.next;
        this.length--;
        return this.printList();
      }

      prevNode = currentNode;
      currentNode = currentNode.next;
      currentIndex++;
    }
  }

  //* Andrei solution
  // 원리: 포인터를 바꾸고 head와 tail 뒤바꿈.
  reverse() {
    // 한자리 숫자일때
    if (!this.head.next) {
      return this.head;
    }

    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      const temp = second.next;
      // 화살표 방향 바꿔주기
      second.next = first;

      // 다음 loop 타자를 위해 순서 이동
      first = second;
      second = temp;
    }
    // 위에 this.tail = this.head 때문에 this.head가 수정되면 this.tail도 수정된다.
    this.head.next = null;
    this.head = first;
    return this;
  }

  //! My solution: reverse
  reverse() {
    let index = 0;
    let arr = [];
    let currentNode = this.head;

    while (index <= this.length - 1) {
      arr.push(currentNode.value);
      console.log("arr: ", index, arr);

      if (index === this.length - 1) {
        currentNode = this.head;
      } else {
        currentNode = currentNode.next;
      }

      index++;
    }

    console.log("final: ", index, arr, currentNode);

    while (index - 1 > -1) {
      currentNode.value = arr[index - 1];
      currentNode = currentNode.next;
      index--;
    }

    return this.printList();
  }

  rotate() {
    let count = 1;
    let currentNode = this.head;

    while (count <= this.length) {
      this.append(currentNode.value);
      currentNode = currentNode.next;
      this.remove(0);
      count++;
      console.log("changed: ", this.printList());
    }

    return this.printList();
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }
};

const myLinkedList = new LinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.prepend(0);
myLinkedList.insert(2, 8);
myLinkedList.remove(1);
myLinkedList.remove(10);
myLinkedList.reverse();

// myLinkedList.printList();

//! 2. Doubly Linked List
const DoublyLinkedList = class {
  constructor(value) {
    this.head = {
      value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    // const newNode = new Node(value);
    const newNode = {
      value,
      next: null,
      prev: null,
    };
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = this.tail.next;
    this.length++;

    return this;
  }

  prepend(value) {
    const newNode = {
      value,
      next: null,
      prev: null,
    };

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;

    return this;
  }

  insert(index, value) {
    //Check for proper parameters;
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = {
      value: value,
      next: null,
      prev: null,
    };

    // index 이전 Node = leader
    const leader = this.traverseToIndex(index - 1);
    // insert 될 값 이후로 밀려날 값 = follower
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
    return this.printList();
  }

  traverseToIndex(index) {
    //Check parameters
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  // Remove는 doubly linked list로 수정 안했음...
  remove(index) {
    // Check Parameters
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }
};

const myLinkedList = new LinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.prepend(0);
myLinkedList.insert(2, 8);
myLinkedList.remove(1);
myLinkedList.remove(10);
