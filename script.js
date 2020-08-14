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

//   ! ======================

// first create my hashing function
const hash = (string, max) => {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
      hash += string.charCodeAt(i);
  }
  // console.log(hash);
  return hash % max;
}

// console.log(hash('phillip', 15));

// create hashtable class
class HashTable {
  constructor() {
      this.storage = [];
      this.storageLimit = 10;
  }

  print() {
     return console.log(this.storage);
  }

  add(key, value) {
      let index = hash(key, this.storageLimit);

      if (this.storage[index] === undefined) {
          this.storage[index] = [[key, value]];
      } else {
          let inserted = false;
          for (let j = 0; j < this.storage[index].length; j++) {
              if (this.storage[index][j][0] === key) {
                  this.storage[index][j][1] = value;
                  inserted = true;
              }
          }
          if (!inserted) this.storage[index].push([key, value]);
      }
  }

  remove(key) {
      let index = hash(key, this.storageLimit);

      if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
          delete this.storage[index];
      } else {
          for (let k = 0; k < this.storage[index].length; k++) {
              if (this.storage[index][k][0] === key) delete this.storage[index][k];
          }
      }
  }

  lookup(key) {
      let index = hash(key, this.storageLimit);

      if (this.storage[index] === undefined) {
          return undefined;
      } else {
          for (let l = 0; l < this.storage[index].length; l++) {
              if (this.storage[index][l][0] === key) return this.storage[index][l];

          }
      }
  }
}

// let table = new HashTable();
// console.log(table);

// table.add('phillip', 'america');
// table.add('noel', 'png');
// table.add('dale', 'uk');
// table.add('callum', 'nz');
// table.print()
// console.log(table.lookup('phillip'));

// table.remove('callum');

// table.print();

// ! ===================================================

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

// add nodes to the start of the linked list
LinkedList.prototype.addToHead = function(value) {
  const newNode = new Node(value, this.head, null);

  if (this.head) this.head.prev = newNode;
  else this.tail = newNode;

  this.head = newNode;
}

// const list = new LinkedList();
// list.addToHead(100);
// list.addToHead(200);
// console.log(list);

// const otherlist = new LinkedList();
// otherlist.addToHead(100);
// otherlist.addToHead(200);
// otherlist.addToHead(300);
// console.log(otherlist);
// console.log(`Middle node value: ${otherlist.head.next.value}`);

// add nodes at the end of the linked list
LinkedList.prototype.addToTail = function(value) {
  const newNode = new Node(value, null, this.tail);
  
  if (this.tail) this.tail.next = newNode;
  else this.head = newNode;
  
  this.tail = newNode;
}

//  const list = new LinkedList();
// list.addToTail(100);
// list.addToTail(200);
// list.addToTail(300);
// console.log(list);

// method to remove the head
LinkedList.prototype.removeHead = function() {
  if (!this.head) return null;

  let value = this.head.value;
  this.head = this.head.next;

  if (this.head) this.head.prev = null;
  else this.tail = null;

  return value;
}

// method to remove the tail
LinkedList.prototype.removeTail = function() {
  if (!this.tail) return null;

  let value = this.tail.value;
  this.tail = this.tail.prev;

  if (this.tail) this.tail.next = null;
  else this.head = null;

  return value;
}

// search method for linked list
LinkedList.prototype.search = function(searchValue) {
  let currentNode = this.head;

  while(currentNode) {
      if (currentNode.value === searchValue) return currentNode;
      currentNode = currentNode.next;
  }

  return null;
}

// const list = new LinkedList();

// list.addToHead(1);
// list.addToHead(4);
// list.addToTail(2);
// list.addToTail(3);

// console.log(!list.search(5));
// console.log(!list.search(3));
// console.log(!list.search(2));
// console.log(!list.search(1));
// console.log(list.search(5));
// console.log(list.search(3));
// console.log(list.search(2));
// console.log(list.search(1));

// ! ===================================================

// helper function
const tinyHelper = (n, i) => {
  // create empty array for future results
  let result = [];
  // set recursion finish clause
  if (n === 0) return result;
  // push the item to the array
  result.push(i);
  // call the recursion return subtracting one from the number of items in the subarray
  return result.concat(tinyHelper(n - 1, i));    
}
// main function
const repeater = (s, n, i) => {
  // create empty array for future results
  let result = [];
  // recursion finish clause
  if (s === 0) return result;
  // push subarray created by helper function into the result array
  result.push(tinyHelper(n, i));
  // call the recursion return subtracting one from the number of subarrays to create
  return result.concat(repeater(s - 1, n, i))   
}

// console.log(repeater(3, 2, 1.7));
// console.log(repeater(4,1,'SDV503'));
// console.log(repeater(1,3,'Hello World!'));

// ! ================================================

// convert decimal to binary
const convertToBinary = (num) => {
  let results = [];
  let remainder;

  while (num > 0) {
    remainder = num % 2;
    results.unshift(remainder);
    num = Math.floor(num / 2);
  }
  return results.join('');
};

console.log(convertToBinary(1));
console.log(convertToBinary(5));
console.log(convertToBinary(10));
console.log(convertToBinary(35));
console.log(convertToBinary(3573));

// ! ====================================================

