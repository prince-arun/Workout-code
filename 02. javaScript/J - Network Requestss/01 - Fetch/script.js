//fetch => fetch(url).then(response => {}).catch(error => {})

//fetch methods
//response.text() => read the response and return the text.
//response.json() => parse the response as JSON.
//response.formData() => returns as fromData objects.
//response.blob() => return as blob(binary data with type).
//response.arrayBuffer()    => low level representation of binary data.

//response properties
//response.status => HTTP code of response
//response.ok => true ,if status 200 - 209
//response.headers => map like object with HTTP headers.

//Example : response.json()
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    let results = response.json();
    console.log(results);
    console.log(response.status);
    console.log(response.ok);
    console.log(response.headers);
  })
  .catch((error) => {
    console.log("There is an error");
    console.log(error);
  });

//Example : response.text()
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    let results = response.text();
    console.log(results);
  })
  .catch((error) => {
    console.log("There is an error");
    console.log(error);
  });
//Example : response.blob()
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    let results = response.blob();
    console.log(results);
  })
  .catch((error) => {
    console.log("There is an error");
    console.log(error);
  });
//Example : response.arrayBuffer()
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    let results = response.arrayBuffer();
    console.log(results);
  })
  .catch((error) => {
    console.log("There is an error");
    console.log(error);
  });

//POST method
