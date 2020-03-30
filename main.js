/* --
1st Example

document.getElementById("button").onclick = function() {
  document.getElementById("confirm").innerHTML = "Purchace Confirmed. Check your Email.";
  document.getElementById("button").style.display = "none";
}
-- */


/* ----
2nd Example

var username = prompt();
console.log(username);
---- */

/* ------
3rd Example

 var age; //Declation
 age = 50; //initialization
------ */

/* --------
4th Example

(function(){
      //IFEE - immediately invoked function expression
  var age =50;
})(); 
-------- */

/* ----------
5th Example

{
  //block
  let x = 10;
  const y = 20;

  console.log(y, x);
  var z = 100; // var variable isn't restricted by the block scope, and also it isn't inside of a function so it will be displayed in the window object
}
 ---------- */




/* ------------
6th Example

// Primitive Data Types
// string / number / boolean / null / undifined / symbol
// ( are immutable / they have object counterpart -> properties (begins as primitive -> gets wrapped/boxed in an object -> runs the "function" --> converted back to primitive))

    let myName = "Panos";
    myName = myName.toUpperCase();
    console.log(myName);
    
//Object Data types
// Are collection of key-value (pair)
    let person = {
        name: "Panos",
        age: 31,
        sex: "male"
       // key(property) = value
       fun: function(){
            console.log("Hello");
            
       }
    };
// we can also use function in objects and they are called method.
//Arrays
// Arrays are also objectives/
      let grades = [30, 30, 12, 23];
------------ */


/* --------------
7th Example


//Number Data Type
//Double-precision floating-point format - 64bit in computer memory
// odd things: it has "ΜΑΧ_SAFE_INTERGER" and "MIN_SAFE_INTEGER"
// it gives as the max and the min SAFE number that we can use.

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

// This data types can also have this following values (developer console)
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NaN); // NaN (not a number)
-------------- */


























