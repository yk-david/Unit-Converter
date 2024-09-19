/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// STEPS TO FOLLOW
/* 
1. Get input's value
	- When HTML loaded, JavaScript loads input's value as ''
	- I need to trigger some event action to save input's value into a variable like clicking button
2. Save this value in a variable
	- But where to save? The Event handler function at the very last? I need to do calculation before... Do I bring those calculations in the EH function?
3. Click on the button
4. Render text in lower part 
*/

// DOM
let btnVal = document.getElementById("conversion-num");
const convertBtn = document.getElementById("conversion-btn");
const resultSection = document.querySelector(".result");

// Length (Meter/Feet)
const lengthRate = 3.281;
const metersToFeet = btnVal * lengthRate;
const feetToMeters = btnVal / lengthRate;

// Volume (Liters/Gallons)
const volumeRate = 0.264;
const litersToGallons = btnVal * volumeRate;
const gallonsToLiters = btnVal / volumeRate;

// Mass (Kilos/Pounds)
const massRate = 2.204;
const kilosToPounds = btnVal * massRate;
const poundsToKilos = btnVal / massRate;

const resultArr = [
  {
    heading: "Length (Meter/Feet)",
    p: `${btnVal} meters = ${metersToFeet.toFixed(
      3
    )} feet | ${btnVal} feet = ${feetToMeters.toFixed(3)} meters`,
  },
  {
    heading: "Volume (Liters/Gallons)",
    p: `${btnVal} liters = ${litersToGallons.toFixed(
      3
    )} gallons | ${btnVal} gallons = ${gallonsToLiters.toFixed(3)} liters`,
  },
  {
    heading: "Mass (Kilograms/Pounds)",
    p: `${btnVal} kilos = ${kilosToPounds.toFixed(
      3
    )} pounds | ${btnVal} pounds = ${poundsToKilos.toFixed(3)} kilos`,
  },
];

function renderEL() {
  // Save input value into a variable
  btnVal = Number(btnVal.value).toFixed(3);
  console.log(btnVal, typeof btnVal);
  //   for (let i = 0; i < resultArr.length; i++) {
  //     let toRendered = `
  //       <div>
  //           <h3>${resultArr[i].heading}</h3>
  //           <p>${resultArr[i].p}</p>
  //       </div>
  //       `;

  //     resultSection.innerHTML += toRendered;
  //   }
}

// EVENT Binding
convertBtn.addEventListener("click", renderEL);
