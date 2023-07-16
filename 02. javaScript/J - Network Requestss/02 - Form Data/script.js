//formData is a object that helps to handle form data easily.
//we can create a form data and send it to server through API.
//syntax
//new formData(key, value);
//formData methods
//formData.append(key, value)
//formData.append(name, blob, filename)
//formData.delete(name)
//formData.get(name)
//formData.has(name)
let formData = new FormData();

formData.append("username", "Arun");
formData.append("email", "abc@gmail.com");
formData.append("gender", "male");

//let send it through API.
fetch("/abc/098dg/kigjjlo")
  .then((response) => console.log(formData))
  .catch((err) => console.log("error"));
