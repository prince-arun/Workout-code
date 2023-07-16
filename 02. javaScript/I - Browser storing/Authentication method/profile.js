let logout = document.querySelector("#logout");
logout.addEventListener("click", () => {
  sessionStorage.removeItem("currentUser");
  window.location.href = "./register.html";
});
