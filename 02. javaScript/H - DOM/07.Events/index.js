//Events
//A block of code, that manages events is event listeners or Event handler.
//an events object is added to the event.
//methods of Event objects.
//type, detail, preventDefault(), currentTarget, cancelable, target.
//Level 2 Event handlers
let btn = document.querySelector("#btn");
btn.addEventListener("click", (e) => {
  alert("You clicked the  button");
  alert(e.type);
  alert(e.detail);
  alert(e.currentTarget);
  alert(e.cancelable);
});

//HTML Event handlers.
//by specifying event methods in html element.
//it typically starts with on keyword.

//Level 0 Event handlers.
let btn0 = document.querySelector("#btn0");
btn0.onclick = function () {
  alert("Level 0 Event");
  alert(this.type);
};
