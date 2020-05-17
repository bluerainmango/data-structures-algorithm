class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null; // head
    this.last = null; // tail
    this.length = 0;
  }
  peek() {
    return this.first;
  }

  //! add new node to tail(last)
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  //! remove first node of head(first)
  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }

    // 처음에는 아래 이전 first el의 next를 null로 해줘야만 더이상 reference하는 곳이 없이 gallbage collector에 의해 삭제되는 줄 알았으나, 자기가 가리키는 것과 상관없이 가리킴을 당하지만 많으면 자동으로 삭제됨.따라서 아래 굳이 해줄 필요 없음.
    // const holdingPointer = this.first;
    // holdingPointer.next = null;

    this.first = this.first.next;
    this.length--;

    return this;
  }
}
const myQueue = new Queue();
myQueue.peek();
myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.peek();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.peek();
