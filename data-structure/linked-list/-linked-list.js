class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const LinkedList = class {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    // const newNode = {
    //   value,
    //   next: null,
    // };

    this.tail.next = newNode;
    this.tail = this.tail.next;
    this.length++;

    return this;
  }

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

  insert(index, value) {
    //Check for proper parameters;
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = {
      value: value,
      next: null,
    };
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
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

  //! my solution : Insert
  //   insert(index, value) {
  //     let currentIndex = 0;
  //     let currentNode = this.head;

  //     if (index === 0) {
  //       this.prepend(value);
  //       return this.printList();
  //     }

  //     if (index >= this.length) {
  //       return this.append(value);
  //     }

  //     while (currentIndex <= index) {
  //       if (currentIndex === index - 1) {
  //         const newNode = {
  //           value,
  //           next: currentNode.next,
  //         };
  //         currentNode.next = newNode;
  //       }
  //       currentIndex++;
  //       currentNode = currentNode.next;
  //     }

  //     return this.printList();
  //   }

  remove(index) {
    // Check Parameters
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }

  //! my solution : Remove
  //   remove(index) {
  //     let currentIndex = 0;
  //     let currentNode = this.head;
  //     let prevNode = null;

  //     if (index === 0) {
  //       this.head = this.head.next;
  //       this.length--;
  //       return this.printList();
  //     }

  //     if (index >= this.length) {
  //       index = this.length - 1;
  //     }

  //     while (currentIndex <= index + 1) {
  //       if (currentIndex === index) {
  //         // when deleting last el
  //         if (currentIndex === this.length - 1) {
  //           prevNode.next = null;
  //           this.length--;
  //           return this.printList();
  //         }

  //         prevNode.next = currentNode.next;
  //         this.length--;
  //         return this.printList();
  //       }

  //       prevNode = currentNode;
  //       currentNode = currentNode.next;
  //       currentIndex++;
  //     }
  //   }

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

// myLinkedList.printList();
