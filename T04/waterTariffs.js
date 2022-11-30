/*
09Nov - task 4 was marked "Request again" it seems like this was a mistake
as all scores are 4/4 and the overall comment is very positive.
Nothing apart from having added this comment has been changed in this file.
*/

let litres = Number(prompt("Enter your water consumption in litres"));

let litresToKl = Number((litres / 1000));

const step01Tariff = 15.73;
const step02Tariff = 22.38;
const step03Tariff = 31.77;
const step04Tariff = 69.76;

const wholeStep01Tariff = Number((6 * step01Tariff));
const wholeStep02Tariff = Number(((10.5 - 6) * step02Tariff));
const wholeStep03Tariff = Number(((35 - 10.5) * step03Tariff));

//when within step 1
if (litresToKl <= 6) {
  let currentStep01Tariff = litresToKl * step01Tariff;
  console.log(`
Your water consumption of ${litres} litres (${(litresToKl).toFixed(3)}Kl) is within the Water Step 1

Your bill is R${(currentStep01Tariff.toFixed(2))}
-------------------------------------------------
Water rates:
Water Step 1 = The first 6kl at R${step01Tariff}/Kl
-------------------------------------------------
Bill breakdown:
Total: ${(litresToKl.toFixed(3))}Kl * R${(step01Tariff).toFixed(2)}/Kl = R${(currentStep01Tariff.toFixed(2))}
`);
//when within step 2
} else if (litresToKl > 6 && litresToKl <= 10.5) {
  let currentStep02Tariff = ((litresToKl - 6) * step02Tariff) + wholeStep01Tariff;
  console.log(`
Your water consumption of ${litres} litres (${(litresToKl).toFixed(3)}Kl) is within the Water Step 2

Your bill is R${(currentStep02Tariff.toFixed(2))}
-------------------------------------------------
Water rates:
Water Step 1 = The first 6Kl at R${step01Tariff}/Kl
Water Step 2 = After 6Kl and up to 10.5Kl at R${step02Tariff}/Kl
-------------------------------------------------
Bill breakdown:
Amount within Water Step 1 rate = 6Kl * R${step01Tariff} = R${(wholeStep01Tariff).toFixed(2)}
Amount within Water Step 2 rate = ${(litresToKl - 6).toFixed(3)}Kl * R${step02Tariff} = R${((litresToKl - 6) * step02Tariff).toFixed(2)}

Total: R${(wholeStep01Tariff).toFixed(2)} + R${((litresToKl - 6) * step02Tariff).toFixed(2)} = R${(currentStep02Tariff.toFixed(2))}
`);
//when within step 3
} else if (litresToKl > 10.5 && litresToKl <= 35) {
  let currentStep03Tariff = ((litresToKl - 10.5) * step03Tariff) + wholeStep01Tariff + wholeStep02Tariff;
  console.log(`
Your water consumption of ${litres} litres (${(litresToKl).toFixed(3)}Kl) is within the Water Step 3

Your bill is R${(currentStep03Tariff.toFixed(2))}
-------------------------------------------------
Water rates:
Water Step 1 = The first 6Kl at R${step01Tariff}/Kl
Water Step 2 = After 6Kl and up to 10.5Kl at R${step02Tariff}/Kl
Water Step 3 = After 10.5Kl and up to 35Kl at R${step03Tariff}/Kl
-------------------------------------------------
Bill breakdown:
Amount within Water Step 1 rate = 6Kl * R${step01Tariff} = R${(wholeStep01Tariff).toFixed(2)}
Amount within Water Step 2 rate = 4.5Kl * R${step02Tariff} = R${(wholeStep02Tariff).toFixed(2)}
Amount within Water Step 3 rate = ${(litresToKl - 10.5).toFixed(3)}Kl * R${step03Tariff} = R${(((litresToKl - 10.5) * step03Tariff)).toFixed(2)}

Total: R${(wholeStep01Tariff).toFixed(2)} + R${(wholeStep02Tariff).toFixed(2)} + R${(((litresToKl - 10.5) * step03Tariff)).toFixed(2)} = R${(currentStep03Tariff.toFixed(2))}
`);
//when within step 4
} else {
  let currentStep04Tariff = ((litresToKl - 35) * step04Tariff) + wholeStep01Tariff + wholeStep02Tariff + wholeStep03Tariff;
  console.log(`
Your water consumption of ${litres} litres (${(litresToKl).toFixed(3)}Kl) is within the Water Step 4

Your bill is R${(currentStep04Tariff.toFixed(2))}
-------------------------------------------------
Water rates:
Water Step 1 = The first 6Kl at R${step01Tariff}/Kl
Water Step 2 = After 6Kl and up to 10.5Kl at R${step02Tariff}/Kl
Water Step 3 = After 10.5Kl and up to 35Kl at R${step03Tariff}/Kl
Water Step 4 = After 35Kl at R${step04Tariff}/Kl
-------------------------------------------------
Bill breakdown:
Amount within Water Step 1 rate = 6Kl * R${step01Tariff} = R${(wholeStep01Tariff).toFixed(2)}
Amount within Water Step 2 rate = 4.5Kl * R${step02Tariff} = R${(wholeStep02Tariff).toFixed(2)}
Amount within Water Step 3 rate = 24.5Kl * R${step03Tariff} = R${(wholeStep03Tariff).toFixed(2)}
Amount within Water Step 4 rate = ${(litresToKl - 35).toFixed(3)}Kl * R${step04Tariff} = R${(((litresToKl - 35) * step04Tariff)).toFixed(2)}

Total: R${(wholeStep01Tariff).toFixed(2)} + R${(wholeStep02Tariff).toFixed(2)} + R${(wholeStep03Tariff).toFixed(2)} + R${(((litresToKl - 35) * step04Tariff)).toFixed(2)} = R${(currentStep04Tariff.toFixed(2))}
`);
}