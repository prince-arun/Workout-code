//--------selecting elements-------------------------
let form = document.querySelector("form");
let btn = document.querySelector("#submitBtn");
let username = document.querySelector("#username");
let age = document.querySelector("#age");
let gender = document.querySelectorAll(".gender");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let cnfmPassword = document.querySelector("#cnfmPassword");
let agree = document.querySelector("#agree");

//-------------form validation--------------------------
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //--------------------------username-------------------------
  let sUser = document.querySelector("#sUser");
  if (username.value.length) {
    sUser.innerHTML = username.value;
    sUser.style.color = "green";
  } else {
    sUser.innerHTML = `Please enter a valid name `;
    sUser.style.color = "red";
  }
  //----------------------------age-----------------------------
  let sAge = document.querySelector("#sAge");
  if (age.value.length) {
    sAge.innerHTML = age.value;
    sAge.style.color = "green";
  } else {
    sAge.innerHTML = `Please enter Age`;
    sAge.style.color = "red";
  }
  //----------------------------gender--------------------------
  let sGender = document.querySelector("#sGender");
  let result = null;
  for (const gen of gender) {
    if (gen.checked) {
      result = gen.value;
      break;
    }
  }
  if (result) {
    sGender.innerHTML = `You selected ${result}`;
    sGender.style.color = "green";
  } else {
    sGender.innerHTML = `Please select any options`;
    sGender.style.color = "red";
  }

  //----------------------Email--------------------------------
  let sEmail = document.querySelector("#sEmail");
  if (email.value.length) {
    sEmail.innerHTML = email.value;
    sEmail.style.color = "green";
  } else {
    sEmail.innerHTML = `Please enter a valid email`;
    sEmail.style.color = "red";
  }
  //---------------------Password-----------------------------
  let s1Password = document.querySelector("#s1Password");
  let s2Password = document.querySelector("#s2Password");
  if (password.value.length) {
    if (cnfmPassword.value.length) {
      if (password.value !== cnfmPassword.value) {
        s2Password.innerHTML = `Both password must be same`;
        s2Password.style.color = "red";
      } else {
        s2Password.innerHTML = `Success`;
        s2Password.style.color = "green";
      }
    } else {
      s2Password.innerHTML = `Please confirm your password`;
      s2Password.style.color = "red";
    }
  } else {
    s1Password.innerHTML = `Please enter the password`;
    s1Password.style.color = "red";
  }

  //--------------------------Terms and conditions----------------
  let terms = document.querySelector("#terms");
  if (!agree.checked) {
    terms.innerHTML = `Please click the terms and conditions`;
    terms.style.color = "red";
  }
});

//--------------------------clear btn----------------------------
let clrBtn = document.querySelector("#clrBtn");
clrBtn.addEventListener("click", () => {
  window.location.reload();
});

//----------------------------------------------------------------------------------------------
// for (const ele of form) {
//   if (ele.value) {
//     let smallEle = ele.nextElementSibling;
//     // console.log(smallEle.tagName);  //SMALL
//     if (smallEle && smallEle.tagName === "SMALL") {
//       smallEle.className = "success";
//       smallEle.textContent = "success";
//     }
//   } else {
//     let smallEle = ele.nextElementSibling;
//     if (smallEle && smallEle.tagName === "SMALL") {
//       smallEle.className = "Error";
//       smallEle.textContent = "Error";
//     }
//   }
// }
// let checkbox = document.querySelector("#agree");
// if (!checkbox.checked) {
//   let terms = document.querySelector("#terms");
//   terms.innerHTML = `You must Agree the Terms and conditions`;
// } else if (checkbox.checked) {
//   let terms = document.querySelector("#agree");
//   terms.innerHTML = "";
// }

// console.log(checkbox.checked);
