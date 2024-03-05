
function Calculator(val1, val2, var3) {
    // Basic Calculator Function
    if (var3 === 1) {
        let a = val1 + val2;
        console.log("The Sum of", val1, "+", val2, "=", a);
    } else if (var3 === 2) {
        if (val2 > val1) {
            let a = val2 - val1;
            console.log("The Difference of", val2, "-", val1, "=", a);
        } else {
            let a = val1 - val2;
            console.log("The Difference of", val1, "-", val2, "=", a);
        }
    } else if (var3 === 3) {
        let a = val1 * val2;
        console.log("The Product of", val1, "X", val2, "=", a);
    } else if (var3 === 4) {
        if (val2 !== 0) {
            let a = Math.floor(val1 / val2);
            let b = val1 % val2;
            console.log("The Quotient of", val1, "/", val2, "=", a);
            console.log("The Remainder of", val1, "/", val2, "=", b);
        } else {
            console.log("Division by Zero is not possible.");
        }
    } else if (var3 === 5) {
        if (val1 > 0) {
            if (val1 === 0) {
                console.log("The Factorial of 0 is 1");
            }
            let fact = 1;
            for (let i = 1; i <= val1; i++) {
                fact = fact * i;
            }
            console.log("The Factorial of", val1, "is", fact);
        } else {
            console.log("Cannot do Factorial for Negative Numbers");
        }
    } else {
        console.log("Please check the Option you have entered.");
    }
}

console.log("Welcome to Javascript Calculator");

let input1, input2;

while (true) {
    if (!input1 && !input2) {
        input1 = parseInt(prompt('Enter Value 1:'));
        input2 = parseInt(prompt('Enter Value 2:'));
    }

    console.log("Enter 1 to perform Addition");
    console.log("Enter 2 to perform Subtraction");
    console.log("Enter 3 to perform Multiplication");
    console.log("Enter 4 to perform Division");
    console.log("Enter 5 to perform Factorial");
    var input3 = parseInt(prompt('Enter The Operation Which You Want to Perform:'));

    if (isNaN(input1) || isNaN(input2) || isNaN(input3)) {
        console.log("Invalid input. Please enter a value");
        continue;
    }

    Calculator(input1, input2, input3);

    var choice = prompt('Do you want to perform any other Operations with the same value (Y/N):');
    if (choice.toLowerCase() === 'y') {
        continue;
    }

    choice = prompt('Do you want to enter new values(Y/N):');
    if (choice.toLowerCase() === 'y') {
        input1 = null;
        input2 = null;
        continue;
    } else {
        break;
    }
}

console.log("Thank You For Using the Calculator");
