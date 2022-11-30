//ask user to input the temperature value
let tempValue = Number(prompt("Enter the temperature value: "));

//ask user input the metric temperature to convert FROM
let tempMetricToConvertFrom = prompt(`In which metric is the temperature (${(tempValue.toFixed(2))}) you would like to convert:\n- Type C for Celsius\n- Type F for Fahrenheit\n- Type K for Kelvin`);


//metric temperature to convert TO
let tempMetricToConvertTo = "";


/*
this will filter the options, i.e if a user likes to convert from Celsius, then 
the second input will be to convert only to Fahrenheit or kelvin
*/
//if Celsius, ask user input for Fahrenheit or Kelvin
//a while loop will help make sure the user input is correct, if the user enter a different letter it will ask again until the user inputs the correct letter(s)
while (tempMetricToConvertFrom.toLowerCase() != "c" || tempMetricToConvertFrom.toLowerCase() != "k" || tempMetricToConvertFrom.toLowerCase() != "f") {
    //if Celsius, ask the user to which metric they would like to convert to, F or K only
    if (tempMetricToConvertFrom.toLowerCase() === "c") {
        tempMetricToConvertTo = prompt(`From Celsius, to which metric you would like to convert the temperature (${(tempValue.toFixed(2))}°C):\n- Type F to convert to Fahrenheit\n- Type K to convert to Kelvin`);
        //a while loop will help make sure the user inputs the correct values
        while (tempMetricToConvertTo.toLowerCase() != "f" || tempMetricToConvertTo.toLowerCase() != "k") {
            //if fahrenheit, calculations
            if (tempMetricToConvertTo.toLowerCase() === "f") {
                let toFarenheit = (tempValue * (9/5)) + 32;
                console.log(`${(tempValue).toFixed(2)}°C is ${(toFarenheit).toFixed(2)}°F`);
                break
            //if kelvin, calculations
            } else if (tempMetricToConvertTo.toLowerCase() === "k") {
                let toKelvin = tempValue + 273.15;
                console.log(`${(tempValue).toFixed(2)}°C is ${(toKelvin).toFixed(2)}°K`);
                break
            }
            //if the user input a different letter
            tempMetricToConvertTo = prompt(`Oops! "${tempMetricToConvertTo}" is not a valid metric. You are trying to convert ${(tempValue).toFixed(2)}°C to Fahrenheit or Kelvin\nType F for Fahrenheit or K for Kelvin`)
        }
        break
    }
    //if Fahrenheit, ask the user to which metric they would like to convert to, C or K only
    else if (tempMetricToConvertFrom.toLowerCase() === "f") {
        tempMetricToConvertTo = prompt(`From Fahrenheit, to which metric you would like to convert the temperature (${(tempValue).toFixed(2)}°F):\nType C to convert to Celsius\nType K to convert to Kelvin`);
        //a while loop will help make sure the user inputs the correct values
        while (tempMetricToConvertTo.toLowerCase() != "c" || tempMetricToConvertTo.toLowerCase() != "k") {
            //if celcius, calculations
            if (tempMetricToConvertTo.toLowerCase() === "c") {
                let toCelsius = (tempValue - 32) * (5/9);
                console.log(`${(tempValue).toFixed(2)}°F is ${(toCelsius).toFixed(2)}°C`);
                break
            //if kelvin, calculations
            } else if (tempMetricToConvertTo.toLowerCase() === "k") {
                let toKelvin = (tempValue + 459.67) * (5/9);
                console.log(`${(tempValue).toFixed(2)}°F is ${(toKelvin).toFixed(2)}°K`);
                break
            }
            //if the user input a different letter
            tempMetricToConvertTo = prompt(`Oops! "${tempMetricToConvertTo}" is not a valid metric. You are trying to convert ${(tempValue).toFixed(2)}°F to Celsius or Kelvin\nType C for Celsius or K for Kelvin`)
        }
        break
    }
    //if Kelvin, ask user input for Celsius or Fahrenheit only
    else if (tempMetricToConvertFrom.toLowerCase() === "k") {
        tempMetricToConvertTo = prompt(`From Kelvin, to which metric you would like to convert the temperature (${(tempValue).toFixed(2)}°K):\nType C to convert to Celsius\nType F to convert to Fahrenheit`);
        //a while loop will help make sure the user inputs the correct values
        while (tempMetricToConvertTo.toLowerCase() != "c" || tempMetricToConvertTo.toLowerCase() != "f") {
            //if celcius, calculations
            if (tempMetricToConvertTo.toLowerCase() === "c") {
                let toCelsius = tempValue - 273.15;
                console.log(`${(tempValue).toFixed(2)}°K is ${(toCelsius).toFixed(2)}°C`);
                break
            //if fahrenheit, calculations
            } else if (tempMetricToConvertTo.toLowerCase() === "f") {
                let toKelvin = (tempValue * (9/5)) - 459.67;
                console.log(`${(tempValue).toFixed(2)}°K is ${(toKelvin).toFixed(2)}°F`);
                break
            }
            //if the user input a different letter
            tempMetricToConvertTo = prompt(`Oops! "${tempMetricToConvertTo}" is not a valid metric. You are trying to convert ${(tempValue).toFixed(2)}°K to Celsius or Farenheit\nType C for Celsius or F for Farenheit`)
        }
        break
    }
    //if the user input a different metric to convert from
    tempMetricToConvertFrom = prompt(`Oops! "${tempMetricToConvertFrom}" is not a valid metric. Please enter a valid metric\n- Type C for Celsius\n- Type F for Farenheit\n- Type K for Kelvin`)
}



/*
I found help here https://stackoverflow.com/questions/36375261/nested-while-loops-in-javascript 
*/