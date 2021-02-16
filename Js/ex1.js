var num1 = parseInt(prompt("Enter Number 1:"));
var num2 = parseInt(prompt("Enter Number 2:"));
var operation = (prompt("Enter Mathematical operation (+,-,*,/): "));

if(operation ==='+'){console.log(`${num1} + ${num2} = ${num1 + num2}`)}

else if(operation ==='-'){console.log(`${num1} - ${num2} = ${num1 - num2}`)}
else if(operation ==='*'){console.log(`${num1} * ${num2} = ${num1 * num2}`)}
else if(operation ==='/'){console.log(`${num1} / ${num2} = ${num1 / num2}`)};