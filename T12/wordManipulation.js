let userInput = prompt("Please enter a word:");

let userWord = userInput.toLowerCase(); //this here is to turn the user imput word to lowercase to be more consistent, just in case the user input some letters in uppercase and this task where to lowercase every 6th letter of the word could be confusing.

// title of the task
console.log("Task 02")

let value; //this variable will be used to perform operation inside for loops throughout the program

// 1. the word where every second character is replaced with a "!"
//this will convert the word into an array, so we can loop through each letter
value = userWord.split(''); //this will be used to replace the character every 2 letters, i'm creating an array here
//this for loop will iterate through the array 
for (let i = 0; i < value.length; i++) {

  //to replace the every 2 character to "!"
  // again, i % 2 === 0 will include the first letter which I don't want, so by saying i % 2 === 1 will skip the first letter and go to the second letter.
  if (i % 2 === 1) {
    value.splice(i, 1, "!"); // this will replace the every to letter to "!"
  }
}
console.log(`\n1. The word where every 2nd character is replaced with a "!":\n${value.join('')}`) // console.log the result using join to put the word back together

//----------------------------------------
//2. the word reverse
//this will be used to convert the word into an array, so we can reverse it after
value = ""; //reset the value of value
value = userWord.split(''); //convert to an array

// this will reverse the orinal word
let reverseValue = value.reverse(); // reverse the array

// console.log the result using join to put the word back together
console.log(`\n2. The word reversed:\n${reverseValue.join('')}`)

//------------------------------------------------------------
//3.The word where every 6th letter is uppercase
// I watched this method in the lecture T13 - String Handling
// a for loop to iterate throug each letter
value = ""; //reset the value of value
for (let i = 0; i < userWord.length; i++) {
  // I'm using remainder to locate the 6th position of the word in userWord, but if I say that i % 6 === 0 the result will include the first letter and then it will go to the 6th position after the first letter, ie for the word "javascript" the result will be "JavascRipt", as far as I understand the task the 6th position should be "javasCript", so i found a trick (on my own) using the % reminder operator, saying that i % 6 === 5 will go straight to 6th position omiting the first letter :-)
  if (i % 6 === 5) {
    value += userWord[i].toUpperCase(); // when true, the character in [i] will be uppercase
  } else {
    value += userWord[i]; // when false do nothing, put the letter in [i] as it is
  }
}
console.log(`\n3.The word where every 6th letter is uppercase:\n${value}`); // console.log the result

//-------------------------------------------------------------
//4. An array of the ascii values for each character in the word
//using charCodeAt
value = ""; //reset the value of value
let asciiArray = []; //new array
for (let i = 0; i < userWord.length; i++) {
  asciiArray.push(userWord.charCodeAt(i)); // this will retrieve the ascii code of each letter and add it to the asciiArray
}
console.log(`\n4.An array of the ascii values for each character in the word:\n${asciiArray}`); // console.log the result