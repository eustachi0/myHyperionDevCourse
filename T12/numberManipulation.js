//array to store the values
let arrayNumbers = [];

//this variable will determine the array size
let arraySize = 10;

// this will ask the user to enter the number of number the arraySize is before enter to a while loop to ask for the rest of the numbers
arrayNumbers.push(Number(prompt(`Enter ${arraySize} random numbers`)));

// this while loop will ask the user all the values, in each iteration will show the user which values have been entered
while (arrayNumbers.length <= arraySize - 1) {
    arrayNumbers.push(Number(prompt(`You have entered: ${arrayNumbers}\nEnter another random number`)));
}

//this will add a user to input 10 random nubers


//console.log the numbers the user input
console.log(`Numbers you entered: (${arrayNumbers})\n------------------------------------`);

//1. the total of all the number, I am using a for of loop
let sum = 0;
for (let value of arrayNumbers) {
  sum += value;
}

//this will console.log the total of number in arrayNumbers
console.log(`\nThe total of all number is: ${sum}`);

//2. The max value in the list arrayNumber
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max

let maxValue = Math.max(...arrayNumbers); // this will get the max value and store it in this variable

console.log(`\nThe max value is: ${maxValue}`); //this will console.log the max value

//3. The min value in the list arrayNumber
let minValue = Math.min(...arrayNumbers); // this will get the min value and store it in this variable

console.log(`\nThe min value is: ${minValue}`); //this will console.log the min value

//4. The average
// average = sum / arrayNumbers.length
// at this point we already have the variable sum
let arrayLength = arrayNumbers.length;
let average = (sum / arrayLength).toFixed(2); // this will calculate the average and fix it to 2 decimals

// this will console.log the average value fix to 2 decimals
console.log(`\nThe average is: ${average}`);


//5. The median value in the list arrayNumber
// found help here https://www.educative.io/answers/how-to-get-the-median-of-an-array-of-numbers-in-javascript, to calculate the medium value
// this array has 10 number, it is an even array, sum the values of indexes [5] + [6] / 2, if it's and odd array is the value of the index (array length / 2)
// the array has to be sorted from min to max before
//sort the list arrayNumbers
arrayNumbers.sort((a, b) => a - b);

let medianValue; //we will store the mediun value in this variable

//statements, to check if it's an odd array or even array
if(arrayNumbers.length % 2 != 0) {
  //if true, it's an odd array
  
  //middle index, arrayNumber length / 2
  let middleIndex = Math.floor(arrayNumbers.length / 2);

  //the median, arrayNumbers.length / 2
  medianValue = arrayNumbers[middleIndex];
} else {
  //if false, it's an even array
  
  //middle index, arrayNumber length - 1 / 2 (index are from 0 to 9) this ia why is arrayNumbers.length -1
  //I noticed that when I added 10 numbers 1,2,3,4,5,6,7,8,9,10 to the array, the median value was 6.5 which is wrong as it should be 5.5, this was because middleIndex = arrayNumbers.length / 2 = [5] which its value is 6 and according to the formula, then to add middleIndex[5] + 1 = [6] which its value is 7, so 6+7/2=6.5, it was when I realized I had to substract 1 to arrayNumbers.length -1, so now it will get the correct indexes using the calcs below, middleIndex will be [4] which its value is 5 and middleIndex[4] + 1 = [5] which its value is 6
  //I made sure that the calcs were correct by using this site to verify the results https://www.calculatorsoup.com/calculators/statistics/mean-median-mode.php
  let middleIndex = Math.floor((arrayNumbers.length - 1) / 2);
  
  //the median for an even array, is the average value of the two middle elements, the article where I've got help from has an error, as it doesn't divide the two median values / 2.
  medianValue = (arrayNumbers[middleIndex] + (arrayNumbers[middleIndex + 1])) / 2;

}

console.log(`\nThe median value is: ${medianValue}`); //this will console.log the min value