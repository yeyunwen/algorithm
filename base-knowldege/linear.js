class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const node1 = new Node(0);
const node2 = new Node(1);
const node3 = new Node(2);
node1.next = node2;
node2.next = node3;

const loop = (node) => {
  let temp = node;
  while (true) {
    if (temp) {
      console.log(temp.value);
      temp = temp.next;
    } else {
      break;
    }
  }
};

const recursion = (node) => {
  if (node) {
    console.log(node.value);
    recursion(node.next);
  }
};

// console.time('循环')
// loop(node1)
// console.timeEnd('循环')

// console.time('递归')
// loop(node1)
// console.timeEnd('递归')

const reverse = (node) => {
  let prev = null;
  let current = node;
  let next = null;
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

recursion(reverse(node1));
