let form = document.querySelector("form");
let btn = document.querySelector("#submitBtn");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //retrieving information from
  let regUser = localStorage.getItem(email.value);

  if (regUser) {
    let user = JSON.parse(regUser);
    if (password.value === user.password) {
      sessionStorage.setItem("currentUser", JSON.stringify(user));
      if (email.value && password.value) {
        window.location.href = "./profile.html";
      }
      return;
    } else {
      let s1Password = document.querySelector("#s1Password");
      s1Password.innerHTML = `Invalid password`;
      s1Password.style.color = "red";
    }
  } else {
    let sEmail = document.querySelector("#sEmail");
    sEmail.innerHTML = `Invalid email or password`;
    sEmail.style.color = "red";
  }

  form.reset();
});
