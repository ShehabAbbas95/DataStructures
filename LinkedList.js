class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  addToLast(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  removeLast() {
    if (!this.head) {
      return null;
    }
    let currentNode = this.head;
    let oldNode = null;
    while (currentNode.next) {
      oldNode = currentNode;
      currentNode = currentNode.next;
    }
    oldNode.next = null;
    this.tail = oldNode;
    this.length--;
  }
}
const newList = new LinkedList();
newList.add("A").add("B").add("C").add(1).add(2).add(3);
newList.remove();
