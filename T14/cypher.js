// I am creating an arrow function that takes a string and do the cypher exercise as requested, to output the 15th letter after the input letter taking into account that letters are treated as cyclical.
cypher = (cypherInput) => {

    //cypherInput = cypherInput.toLowerCase(); // here, I am converting the cypherInput string into lowercase to make sure we get the right number when turning a letter into a number
    let cypherInputSplit = cypherInput.split(''); //I split the string cypherInput into an array or list, so we can have access to each character separately and turn it into a number

    let cypherOutput = ''; // this string variable will storage the new word after the operations
  
  
    // a for loop to iterate through each character of the array cypherInputSplit
    for (let i = 0; i < cypherInputSplit.length; i++) {
        // I get here the number of each letter by declaring a new variable j and storage number of the letter within it to be able to perform operations. This will convert a letter into a number, numbers are ranged from -9(0) to 0(9) and alphabet letter from 1(a) to 26(z), using this method any special character will throw a NaN (not at number), therefore special characters will remain as special characters.
        let j = parseInt(cypherInputSplit[i] , 36) - 9;

        // main if statement to filter if avriable j is a number or not, if it is NaN then it will add the character as it is (i.e ,?<>.;@ etc) to the variable cyberOutput, we could also exclude numbers if the string cypherInput has numbers within it by saying if (isNaN(j) || j <= 0 ), but the exercise did not say anything about keeping numbers as numbers, so 0 will be f and 1 will be g an so on.
        if (isNaN(j) ) {
            cypherOutput += cypherInputSplit[i];
        } else {
            //here, if false, the alphabet has 26 letters, I am checking here, as we are outputting the 15th letter after, that 26 - 15 = 11, so the first 11 letters will be the character + the 15th character ahead, if false, means that the letter is within the cyclical state, so I figured out that doing this math does the job 26 - 15 - j, but the letter nro 11 which is k, the result will be 0, so when 0 the output will be different as stated below, for the rest the formula will work fine
            if (j < (26-15)) {
                //Updated 28/11/2022 - As requested, I have added a new if statement to check if the the letters are uppercase in cypherInputSplit[i], if true, the new j letter will be uppercase, if false, it will remain lowercase. Thanks for giving me the chance to add this to the task, I wondered before about this, but for some reason I didn't get that upper and lowercase letters should remain the same, so Thank you! I hope this fulfills your requirements. :) 
                if (cypherInputSplit[i] === cypherInputSplit[i].toUpperCase()) {
                    cypherOutput += ((9 + (j + 15)).toString(36)).toUpperCase();
                } else {
                    cypherOutput += (9 + (j + 15)).toString(36);
                }
            } else {
                //Updated 28/11/2022 - Same here, I wrapped the previuos code within a new if statement to check if the the letters are uppercase in cypherInputSplit[i], if true, the new j letter will be uppercase, if false, it will remain lowercase.
                if (cypherInputSplit[i] === cypherInputSplit[i].toUpperCase()) {
                    if (Math.abs(26 - 15 - j) === 0) {
                        cypherOutput += ((9 + (11+15)).toString(36)).toUpperCase();
                    } else {
                        cypherOutput += ((9 + (Math.abs(26 - 15 - j))).toString(36)).toUpperCase();
                    }
                } else {
                    if (Math.abs(26 - 15 - j) === 0) {
                        cypherOutput += (9 + (11+15)).toString(36);
                    } else {
                        cypherOutput += (9 + (Math.abs(26 - 15 - j))).toString(36);
                    }
                }
            }
        }
    }

    return cypherOutput; // here, we return the new form string!!! :) 
}

//add any string below
console.log(cypher('Add ANY text HERE'));



//a letter to number examples
//parseInt('a', 36) - 9;
//parseInt('b', 36) - 9;
//parseInt('c', 36) - 9;

//a number to a letter example
//(9 + 4).toString(36)


//I found help about converting text to number and viceversa here https://stackoverflow.com/questions/27877197/convert-letter-to-number-in-javascript , I liked the answer from user user1636522
