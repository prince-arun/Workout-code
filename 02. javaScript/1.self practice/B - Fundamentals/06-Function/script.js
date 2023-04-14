function pow(x, n) {
  if (x >= 1 && n >= 1) {
    alert(x ** n);
  } else alert("Enter the valid number");
}

let x = +prompt("Enter the X value", 3);
let n = +prompt("Enter the Y value", 7);
pow(x, n);
