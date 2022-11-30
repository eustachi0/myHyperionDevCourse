// two inputs from user
let number1 = Number(prompt("Enter first number:"));
let number2 = Number(prompt("Enter second number:"));

//parameter to control what type of operation the user chooses
let operationType = "";

//functions
//add function
function add(a, b) {
  let total = a + b;
  return total
}
//subtract
function subtract(a, b) {
  let total = a - b;
  return total
}
//multiply
function multiply(a, b) {
  let total = a * b;
  return total
}
//divide
function divide(a, b) {
  let total = a / b;
  return total
}

while (true) {
  operationType = prompt("Type (+) Add, (-) Subtract, (*) Multiply, (/) Divide\nType only the symbol:")
  //if statement to run whatever the option from the user is, add or subtract or multiply or division
  if (operationType.toLowerCase() === "+") {
    console.log(`You chose (+) Add: ${number1} + ${number2}\nThe total is: ${add(number1, number2)}`);// here the add function is called using the params that the user is asked to provide
    break
  }
  else if (operationType.toLowerCase() === "-") {
    console.log(`You chose (-) Subtract: ${number1} - ${number2}\nThe total is: ${subtract(number1, number2)}`);// here the subtract function is called using the params that the user is asked to provide
    break
  }
  else if (operationType.toLowerCase() === "*") {
    console.log(`You chose (*) Multiply: ${number1} * ${number2}\nThe total is: ${multiply(number1, number2)}`);// here the multiply function is called using the params that the user is asked to provide
    break
  }
  else if (operationType.toLowerCase() === "/") {
    console.log(`You chose (/) Divide ${number1} / ${number2}\nThe total is: ${divide(number1, number2)}`);// here the divide function is called using the params that the user is asked to provide
  } else {
    //here I always like to make sure that if the user types a different letter by mistake the program doesn't end, so if it happens the code below will prompt the user to the question above by keeping the while going, this is mostly why I have been using a while for these kind of programs
    if (operationType.toLowerCase() !== "+" || operationType.toLowerCase() !== "-" || operationType.toLowerCase() !== "*" || operationType.toLowerCase() !== "/") {
      continue
    }
  }
  break
}