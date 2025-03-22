import Node from "./node.js";

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  prepend(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
    this.length++;
  }

  append(value) {
    const newNode = new Node(value, null);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  toString() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.value + (current.nextNode ? " -> " : "");
      current = current.nextNode;
    }
    return result;
  }

  printTail() {
    if (!this.head) {
      console.log("Nothing added yet!");
      return;
    }
    console.log(this.tail);
  }

  at(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.nextNode;
    }
    return current;
  }

  pop() {
    if (!this.head) {
      return null;
    }
    if (this.head === this.tail) {
      const removedNode = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return removedNode;
    }
    let current = this.head;
    while (current.nextNode !== this.tail) {
      current = current.nextNode;
    }
    const removedNode = this.tail;
    current.nextNode = null;
    this.tail = current;
    this.length--;
    return removedNode;
  }

  contains(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.nextNode;
      index++;
    }
    return null;
  }

  insertAt(value, index) {
    if (index < 0 || index > this.length) {
      return null;
    }
    if (index === 0) {
      this.prepend(value);
      return;
    }
    if (index === this.length) {
      this.append(value);
      return;
    }
    const newNode = new Node(value);
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.nextNode;
    }
    newNode.nextNode = current.nextNode;
    current.nextNode = newNode;
    this.length++;
  }

  removeAt(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    if (index === 0) {
      const removedNode = this.head;
      this.head = this.head.nextNode;
      if (!this.head) {
        this.tail = null;
      }
      this.length--;
      return removedNode;
    }
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.nextNode;
    }
    const removedNode = current.nextNode;
    current.nextNode = current.nextNode.nextNode;
    if (!current.nextNode) {
      this.tail = current;
    }
    this.length--;
    return removedNode;
  }
}
