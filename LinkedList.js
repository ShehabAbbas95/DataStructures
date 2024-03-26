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
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  removeLast() {
    if (!this.head) {
      return null;
    }
    let currentNode = this.head;
    let preNode = null;
    while (currentNode.next) {
      preNode = currentNode;
      currentNode = currentNode.next;
    }
    preNode.next = null;
    this.tail = preNode;
    this.length--;
  }
  getNode(value) {
    let currentNode = this.head,
      index = 0,
      preNode = null,
      nextNode = null;

    while (currentNode.value !== value) {
      preNode = currentNode;
      currentNode = currentNode.next;
      index++;
    }
    nextNode = currentNode.next;
    return { index, preNode, currentNode, nextNode };
  }
  insertAfter(targetValue, value) {
    const { currentNode } = this.getNode(targetValue);
    const newNode = new Node(value);
    if (currentNode.next === null) {
      this.tail = newNode;
    }
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.length++;
  }
  insertBefore(targetValue, value) {
    const { preNode, currentNode } = this.getNode(targetValue);
    const newNode = new Node(value);
    this.length++;
    if (!preNode) {
      this.head = newNode;
      newNode.next = currentNode;
      return;
    }
    preNode.next = newNode;
    newNode.next = currentNode;
    return;
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

newList.insertBefore(1, 4);
console.log(newList);
