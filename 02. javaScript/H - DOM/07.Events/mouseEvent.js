//javascript mouse Events.
//1.mousedown
//2.mouseup
//3.click
//4.dbclick
//5.mousemove
// e.screenX, e.screenY and e.clientX , e.clientY

let btn = document.querySelector("button");
btn.addEventListener("mousedown", (e) => {
  console.log("mouseDown");
});

btn.addEventListener("mouseup", (e) => {
  console.log("mouseUp");
});

btn.addEventListener("click", (e) => {
  console.log("click");
});

btn.addEventListener("dblclick", (e) => {
  console.log("dbClick");
});
btn.addEventListener("mouseover", (e) => {
  console.log("mouseOver");
});
btn.addEventListener("mouseout", (e) => {
  console.log("mouseOut");
});

let btn1 = document.querySelector("#btn1");
addEventListener("mousemove", (e) => {
  let X = e.screenX;
  let Y = e.screenY;
});
