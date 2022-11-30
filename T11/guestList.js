//TASK 1

//the array of people names
let peopleNames = [];

peopleNames.push(prompt("Enter the name of a friend:")); //ask the user to add the first friend

//this variable will limit the size of the array, for this case we only want 10 people
let arrayLength = 10;

//using a while loop to add names to the array until the number of friends is 10
while (peopleNames.length <= arrayLength -1) {
    let answer = prompt(`You have entered: ${peopleNames}\nWould you like to invite another friend? y/n`); //here, the user will be asked if they want to add another friend, if yes, user will be asked to enter the name, if not, the program will stop
    
    //if statements to evaluate if the user answer yes or no
    if (answer === "y") {
      peopleNames.push(prompt(`Your friend(s) so far: ${peopleNames}\nEnter the name of another friend:`)); //ask the user to add another friend
    } else if (answer === "n") {
        break
    } else if (answer != "y" || answer != "n") {
        continue //this is to prevent the program from stoping if the user types the wrong answer letter
    }
}

//if statement to console.log the results, when the peopleNames array is equal to arrayLength it will reach the limit of the array, or the number of people the user can add
if (peopleNames.length === arrayLength) {
    console.log(`You have reached the number of ${arrayLength} people you can invite\nYour guest list: ${peopleNames}`);//this will be printed when the user tries to add more than 10 guests and it will print the list of guests
} else {
    console.log(`Your friend(s):\n${peopleNames}`); //this will be printed if the user adds less than 10 guests and it will print the list of guests
}


//----- END OF TASK 1


//----- TASK 2
//if statement to console.log the results, and to ask the user if they want to replace a guest
if (peopleNames.length === arrayLength) {
    answer = prompt(`You have reached the number of ${arrayLength} people that you can invite\nYour current guest list: ${peopleNames}\nWould you like to replace someone on the list? y/n`) //this will ask the user if they want to replace a guest
        if (answer === "y") {
            let guestIndex = peopleNames.indexOf(prompt(`Your current list: ${peopleNames}\nType the name of the person you would like to replace:`)); //this will ask the user for name they want to change
            let newGuest = prompt(`Type the name of the person you would like to add instead of ${peopleNames[guestIndex]}`); // this will ass for name of the new guest
            peopleNames.splice(guestIndex,1,newGuest); // this is where we use splice to replace the values
            console.log(`Your new list:\n${peopleNames}`); // this will print the new list
        }
        else if (answer === "n") {
            console.log(`Your list didn't change: ${peopleNames}`)
        }
} 