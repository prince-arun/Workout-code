//try...catch - Error handling
//syntax
/* try{
          1)code here runs.
          2)if no error found, it ignore the catch
          3) if error occurred, it stops the code, goes to catch block.
 }catch(err){
          1)err is an object that contains info about the errors.
          2) err.name => name of the error
          3) err.message => textual message about error details.
          4) err.stack => current call stack.

 } */

//example: without error
try {
  console.log("hello, world");
  console.log(true);
} catch (err) {
  console.log(err);
  console.log(err.name);
}

//example: with error
try {
  console.log("welcome");
  console.log(winner);
} catch (err) {
  console.log(`err : ${err}`);
  console.log(`name : ${err.name}`);
  console.log(`message : ${err.message}`);
  console.log(`stack : ${err.stack}`);
}

//throw statement
let json = '{ "age": 30 }'; // incomplete data
try {
  let user = JSON.parse(json);
  if (!user.name) {
    throw new SyntaxError(`Incomplete date : No such key`);
  }
} catch (err) {
  console.log(err.message);
}

//finally
try {
  let user = JSON.parse(json);
  console.log(user.age);

  if (!user.name) {
    throw new ReferenceError("name is not defined");
  }
  console.log(user.name);
} catch (err) {
  console.log(err.message);
} finally {
  console.log("finall outputs the results");
}
