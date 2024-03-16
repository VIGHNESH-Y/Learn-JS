console.log("Hello World");
var a =10;
var b=20;
var c=a++;
console.log("The value after increment is",c); // The value will be incremented but not be displayed.. Use it again to display
console.log("The value after increment is",c); // The value will not be displayed.
console.log("The Sum is",a+b);
console.log("The Difference is",b-a);
console.log("The Product is",a*b);
console.log("The Quotient is",b/a); 
console.log("The Remainder is",c%a); // This would return 10 as we are C is 10 as we are using Post Increment.. So after Line 4. A will become 11. SO 10%11 returns 10 as the output..
console.log("The Remainder is",a%c); // This would return 1 as the remainder as 11%10 gives Quotient 1 and Remainder 1..
let txt1= "Hello";
let txt2= "World";
console.log(txt1<txt2); //Uses ASCII Value to check if it is true..
console.log(txt1+txt2); //Concatenation of two stings.
console.log(txt2+="How are you"); // Adds text to the Origial one..
console.log(txt2+'5'); //Can add both Interger and a string but returns the value as a string.
console.log(5+5); //Returns 10 by normal Interger addition..
// Number Data type USED TO STORE NUMERICAL VALUES
let length = 16;
let weight = 7.5;

// Strings.. USED TO STORE A COLLECTION OF CHARECTERS
let color = "CSE-B";
let lastName = "SRMIST";

// Booleans.. TRUE/FALSE
let x = true;
let y = false;

// Objects.. THEY ARE SIMILAR TO DICTIONARY IN PYTHON WITH KEY VALUE PAIRS
const person = {firstName:"Harshika", lastName:"Reddy"};

// Array object.. LIKE LIST IN PYTHON
const cars = ["Vighnesh", "Harshika", "Karthikeyen"];

// Date object... USED TO STORE DATE IN DATE FORMAT WHICH IS NOT PRESENT IN PYTHON..Uses YYYY-MM-DD Format.
const date = new Date("2004-12-25");

typeof(date); //Returns Date
typeof(person); //Returns Object
typeof(x); //Returns Bool

function MyFirstFunction (val1,val2){ //Takes in 2 Values which are Val1 and Val2
console.log(val1*val2); // A MULTIPLICATION FUNCTION
}
var a=10;
var b=20;
MyFirstFunction(10,20) //FUNCTION CALL

console.log("Now Off to Learn Js for Web Development")