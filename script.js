// ! =============================================
// ! LINKED LISTS

function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
  
  class DoubleLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    addToHead(value) {
      const newNode = new Node(value, this.head, null);
  
      if (this.head) this.head.prev = newNode;
      else this.tail = newNode;
  
      this.head = newNode;
      this.length++;
      return this;
    }
  
    addToTail(value) {
      const newNode = new Node(value, null, this.tail);
  
      if (this.tail) this.tail.next = newNode;
      else this.tail = newNode;
  
      this.tail = newNode;
      this.length++;
      return this;
    }
  
    removeHead() {
        if (!this.head) return null;
  
        let value = this.head.value;
        this.head = this.head.next;
  
        if (this.head) this.head.prev = null;
      else this.tail = null;
  
      this.length--;
      return value;
    }
    removeTail() {
      if (!this.tail) return null;
  
      let value = this.tail.value;
      this.tail = this.tail.prev;
  
      if (this.tail) this.tail.next = null;
      else this.head = null;
  
      this.length--;
      return value;
    }
  
    search(queryValue) {
        let currentNode = this.head;
  
        while(currentNode) {
            if (currentNode.value === queryValue) return currentNode;
            currentNode = currentNode.next;
        }
  
        return null;
    }
  
    replace(currentValue, newValue) {
        const replacementNode = this.search(currentValue);
  
        if (replacementNode) {
            replacementNode.value = newValue;
            return true;
        }
  
        return false;
    }
  }
//   let testList = new DoubleLinkedList();
//   console.log(testList);
//   console.log(testList.addToHead("firstHead"));
//   console.log(testList.addToTail("firstTail"));
//   console.log(testList.search('firstTail'));
//   console.log(testList.replace('firstTail', 'worstTail'));
  
  // console.log(testList.removeTail());
  // console.log(testList.removeHead());

//   ! below