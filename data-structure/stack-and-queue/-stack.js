class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//! Create Stack using Linked List
class Stack {
  constructor() {
    this.top = null; //head
    this.bottom = null; //tail
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  //! add new node to top(head)
  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }

    this.length++;
    return this;
  }

  //! remove first node of top(head)
  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }

    //const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return this;
  }
}

const myStack = new Stack();
myStack.push("google");
myStack.push("udemy");

//! Create Stack using array
class Stack {
  constructor() {
    // this.top = null;
    // this.bottom = null;
    // this.length = 0;
    this.data = [];
  }

  peek() {
    return this.data[this.data.length - 1];
  }

  push(value) {
    this.data.push(value);
    return this;
  }

  pop() {
    this.data.pop();
    return this;
  }
}
myStack.peek();
myStack.push("google");
myStack.push("udemy");
myStack.push("discord");
myStack.peek();
myStack.pop();
myStack.pop();
myStack.pop();

//Discord
//Udemy
//google
