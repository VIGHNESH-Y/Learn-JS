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
