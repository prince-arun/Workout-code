//String methods
//double quotes (" "), single quotes(' '), backticks (` `)
//Backticks
//we can use backticks to represent multiline. We cant do it in the double or single quotes.
let hello = `hai, 
        ${1 + 3},
        welcome,
        ${true}`;

//Escape characters
//  "\" is called escape character.
//  \n for new line (line break)
//  \t for tab space.
console.log(
  "Hai, \t\t hello, welcome \nYou are watching Demon Slayer season 3"
);

// There also exists escaped quotes \' and \" and \`
// if we want to include quoted inside of a string , we can use escaped quotes.
console.log("Hai, i'am a string"); //we can use double quotes and single quotes together to achieve this or we can use escaped character.
console.log(`i\`v met Eren Yeaager`);

//==============================================================================================

//to know the string length
let a = "hello";
console.log(a.length); //length is 5
a = "hai\nhello";
console.log(a.length);

//to access the string character.
//    [] square bracket method.
let b = "four";
console.log(b[2]); //the index starts from 0.

//    string.at(pos) method
console.log(b.at(-1)); // at(pos) => pos for position, in index value. if we put -1 it starts from last character.

//strings are immutable, we can't change the character in a string.
//usually this is done by creating a new variable and assign to it.
let c = "welcome";
console.log(c);
c = c[4] + "0";
console.log(c);

//-----------------------------------------------------------------------------------
//to change the case
//toLowerCase(), toUpperCase()
let d = "ArUnPrInCe";
console.log(d.toLowerCase());

console.log(d.toUpperCase());

//Searching for a substring
let e = "I am IronMan";
console.log(e.indexOf("am"));

//Getting a substring
e = "I can do this all day";
console.log(e.slice(2, 5)); //it gets the string from its index value 2 to 5(5 not inclued. so upto 4)
//to trim empty spaces from string
let f = "             hello               ";
console.log(f);
console.log(f.trim()); //trim empty space from both ends.
