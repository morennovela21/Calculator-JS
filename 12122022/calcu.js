// Math Operators

let num1 = Number ( prompt ("Enter the first number:"));
  
let operator = prompt("Enter the operator (+, -, *, /):");

const num2 = Number (prompt ("Enter the second number:"));
    


let result;
if (operator === "+") 
{
    result = num1 + num2;
}
else if (operator == "-") 
{
    result = num1 - num2;
}
else if (operator == "*") {
    result = num1 * num2;
}
else {
    result = num1 / num2;
}

// Display the result using alert
alert(result);

