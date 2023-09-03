let value = document.querySelector("#value");
let count = 0;

let btn = document.querySelectorAll(".btn");
console.log(btn);
btn.forEach((press) => {
  console.log(press.classList);
  press.addEventListener("click", (e) => {
    console.log(e.currentTarget.classList);
    let countValue = e.currentTarget.classList;
    if (countValue.contains("increase")) {
      count++;
    } else if (countValue.contains("decrease")) {
      count--;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "black";
    }
    value.innerHTML = count;
  });
});
