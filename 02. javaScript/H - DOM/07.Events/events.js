//Javascript browser Events
//1.Mouse events
//1.1 click => mouse click an element
//1.2 contextmenu => when the mouse right clicks an element.
//1.3 mouseover / mouseout => when mouse over an element / mouse leaves an element.
//1.4 mousedown / mouseup => when mouse pressed / mouse released.
//1.3 mousemove => when mouse is moved.

//2.keyboard events
//2.1 keydown => when key is pressed.
//2.2 keyup => when key is released.

//3.form events
//3.1 submit => when the visitor submits the form.
//3.2 focus => when the visitor focus on a element.

//4.Document events
//4.1 DOMContentLoaded => HTML is loaded and DOM is fully built.

//5.CSS events
//5.1 transitionend => when css animation finishes.

//javascript event handlers
//1.HTML attribute event handlers
//example : on(event) .. onclick
//<button onclick = 'alert("hello, world")'> Click here </button>

//2.DOM event handlers
//example : element.event = function
//button.onclick = alert("hello, world")

//3.Methods
//example : element.addEventListener("event", handler function)
//element.addEventListener("click", (e)=> alert("hello, world"))
//e is a event object,it holds all the information about that particular event.

//A sample delete function
let label = document.querySelector("#label");
let deleteBtn = document.querySelector("#delete");
console.log(label);
console.log(deleteBtn);

label.addEventListener("click", function db(e) {
  label.remove(e.currentTarget);
});

//oninput method
let input = document.querySelector("#firstname");
let small = document.querySelector("#small");

input.oninput = function () {
  small.innerHTML = input.value;
};
