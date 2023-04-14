//Object reference
//How the objects are stored in memory.
/*
    let myName = "prince";
    //  Here we consider myName as a box, inside that box "prince" is stored.
    let userName = myName;
    //  when we copy myName to user name, an another box is created, which also stores "prince".
    //  result totally two box is created , both has same string, "prince".
    //  This is how Primitive - Data types works.

----------------------------------------------------------------------------------------------------------
    let myDetail = {
        name : "prince",
        age : 24,
        status : "working",
    }
    //  Here the  variable myDetail and it's objects are stored in different location.
    //  Here we consider the variable as a ledger that reference the object location. 
    //  variable myDetail reference to the objects.
    let userDetail = myDetail;
    //  when we copy myDetail to userDetail, a second reference has been created. so far the objects only stored one time, but two reference point has been created.
    //  unlike primitive variable , the objects doesn't copied, an extra reference point has been created.
*/
//----------------------------------------------------------------------------------------------------
//Object comparison
let a = {};
let b = a;
console.log(a == b); //Here the value is true, because two objects are same, because there is only one object is here, only two reference for that single object.

let c = {};
let d = {};
console.log(c == d); //Here the result is false, because here two objects are present. Eventhough both objects are empty, yet they are indeed different.

//-----------------------------------------------------------------------------------------------------
//Object Cloning---------------------------------------------------------------------------------------
//When we crete a copy of a object , it only creates a second reference to that Object. To create a clone or to duplicate a object, we use for..in loop.

let firstUser = {
  fullName: "elonmusk",
  age: 56,
  profession: "ceo",
}; // Here we created a object firstUser.

let clone = {};

for (let key in firstUser) {
  clone[key] = firstUser[key];
}
console.log(firstUser); //it consoles the firstUser object.
console.log(clone); //Here the firstUser object's properties are cloned or duplicated as clone object.

clone.fullName = "reeve";
console.log(clone); //when we add a new property in clone object, it only changes, that objects.

console.log(firstUser == clone); //false    //Even though both objects has same properties, both are  different objects.

//Object.assign -------------------------------------------------------
//syntax
//      Object.assign(target, , , ,, source);
// Here the first parameter is the target object, rest of the parameters are source objects. It copies all of the source properties into target object. while copying property from source to target, if a same property already exist in the target object, the property value is overwritten by new value.

let lastUser = {
  uName: "musk",
  age: 76,
};
let fUser = {};

Object.assign(fUser, lastUser); // Here the lastUser object's properties are copied to fUser object.
console.log(lastUser);

console.log(fUser); //both are different objects but both has same properties.

console.log(fUser == lastUser); //false

//structuredClone -----------------------------------------------------
//syntax
// let clone(target object) = structuredClone(source object);

let boxOne = {
  metal: "iron",
  liquid: "H20",
  aNum: {
    outerNUmber: 45,
    outShells: "lastcounts",
  },
};

// Here the object boxOne has another object aNum. It is called nested objects. if we clone this type of objects using Object.assign it will only copy the reference to the second nested object.
//Here we user structuredClone method.

let clone3 = structuredClone(boxOne);

console.log(boxOne);
console.log(clone3);
