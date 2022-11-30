//user input
let userInput = Number(prompt("Input a number: "));

//statements to determine if the user input is divisible by 7 and/or 11
//when both are divisible by 7 and 11
if (userInput % 7 === 0 && userInput % 11 === 0) {
    console.log(`${userInput} is divisible by both 7 and 11.`)
/*
when one or the other is divisible by 7 or 11 (I don't know if the 
nested if was necessary here, but I thought it's neater?)
*/
} else if (userInput % 7 === 0 || userInput % 11 === 0) {
    if (userInput % 11 === 0) {
        console.log(`${userInput} is divisible by 11.`)
    } else if (userInput % 7 === 0) {
        console.log(`${userInput} is divisible by 7.`)
    }
//when neither are divisible by 7 nor 11
} else {
    console.log(`${userInput} is not divisible by either 7 or 11.`)
}