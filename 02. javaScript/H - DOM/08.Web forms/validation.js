let form = document.querySelector("form");
console.log(form);
let btn = document.querySelector("#submitBtn");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  for (const ele of form) {
    if (ele.value) {
      let smallEle = ele.nextElementSibling;
      // console.log(smallEle.tagName);  //SMALL
      if (smallEle.tagName === "SMALL") {
        smallEle.className = "success";
        smallEle.textContent = "success";
      }
    } else {
      let smallEle = ele.nextElementSibling;
      if (smallEle.tagName === "SMALL") {
        smallEle.className = "Error";
        smallEle.textContent = "Error";
      }
    }
  }
});
let clrBtn = document.querySelector("#clrBtn");
clrBtn.addEventListener("click", () => {
  window.location.reload();
});
