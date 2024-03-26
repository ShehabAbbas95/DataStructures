class Node {
  constructor(value, pre = null, next = null) {
    this.value = value;
    this.next = next;
    this.pre = pre;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  add(value) {
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
    newNode.pre = currentNode;
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
    newNode.pre = currentNode;
    this.length++;
  }
  insertBefore(targetValue, value) {
    const { preNode, currentNode } = this.getNode(targetValue);
    const newNode = new Node(value);
    this.length++;
    if (!preNode) {
      this.head = newNode;
      newNode.next = currentNode;
      currentNode.pre = newNode;
      return;
    }
    preNode.next = newNode;
    newNode.next = currentNode;
    newNode.pre = preNode;
    currentNode.pre = newNode;
    return;
  }
  removeNode(targetValue) {
    const { preNode, currentNode, nextNode } = this.getNode(targetValue);
    if (!currentNode) {
      return null;
    }
    if (!preNode) {
      this.head = currentNode.next;
      this.head.pre = null;
      this.length--;
      return;
    }
    preNode.next = currentNode.next;
    nextNode.pre = preNode;
    this.length--;
  }
}
const newList = new DoublyLinkedList();
newList.add("A").add("B").add("C").add(1).add(2).add(3);

console.log(newList);
