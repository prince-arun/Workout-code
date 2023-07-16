let div = document.querySelector("div");
div.style.color = "red";

div.setAttribute(
  "style",
  "color : red; background-color: yellow; font-size : 30px"
);

let div2 = document.querySelector("#div2");
div2.style.cssText = "color: blue; background-color: grey; font-size : 30px";

css(div, { color: "white", [background - color]: "black" });
