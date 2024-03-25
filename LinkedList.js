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
  getNode(value) {
    let currentNode = this.head;
    let index = 0;
    while (currentNode.value !== value) {
      currentNode = currentNode.next;
      index++;
    }
    return currentNode;
  }
  insertAfter(targetValue, value) {
    const targetNode = this.getNode(targetValue);
    const newNode = new Node(value);
    newNode.next = targetNode.next;
    targetNode.next = newNode;
    this.length++;
  }
}
const newList = new LinkedList();
newList
  .addToLast("A")
  .addToLast("B")
  .addToLast("C")
  .addToLast(1)
  .addToLast(2)
  .addToLast(3);

newList.insertAfter("C", "D");
console.log(newList);
