//Callback Asynchronous function
function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
}

function callback() {
  document.body.style.background = "red";
}

loadScript("./script.js", callback);
