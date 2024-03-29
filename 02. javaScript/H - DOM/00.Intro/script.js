// DOM is a API interface in browser through we can manipulate the DOM tree.
// In DOM everything is node. every tag is called element node (object).
// text inside of element node is text node (also object).

// total there are 12 types of nodes, we only work with 4 of them.
// 1. document node
// 2. element node
// 3. text node
// 4. comments

//By using DOM we can perform the following actions.
// 1. Selecting elements
// 2. Traversing between elements.
// 3. Manipulating elements.
// 4. Manipulating attributes.
// 5. working with styles.
// 6. Events
// 7. Working with form elements.

//-------------------------------------------------------------------------------------------------------------------------
//node types
// 1 represents an Element node.
// 2 represents an Attribute node.
// 3 represents a Text node.
// 8 represents a Comment node.
// 9 represents a Document node.
// 11 represents a Document Fragment node.

let h3 = document.createElement("h3");
console.log(h3.nodeType); // => 1, represent an Element node.
console.log(h3.nodeName); // h3
console.log(h3.nodeValue);

//getElementById() and querySelector() => returns an object with an element.
//getElementsByTagName() or querySelectorAll() => returns Node-lists.
