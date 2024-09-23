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

// DOM Selection
let inputVal = document.getElementById("conversion-num");
const convertBtn = document.getElementById("conversion-btn");
const resultSection = document.querySelector(".result");
let isContentsOn = false;

// Convert EVENT LISTENER Function
function renderEL() {
  // Save input value into a variable
  inputVal = Number(inputVal.value).toFixed(3);

  // DATA: Length (Meter/Feet)
  const lengthRate = 3.281;
  const metersToFeet = inputVal * lengthRate;
  const feetToMeters = inputVal / lengthRate;

  // DATA: Volume (Liters/Gallons)
  const volumeRate = 0.264;
  const litersToGallons = inputVal * volumeRate;
  const gallonsToLiters = inputVal / volumeRate;

  // DATA: Mass (Kilos/Pounds)
  const massRate = 2.204;
  const kilosToPounds = inputVal * massRate;
  const poundsToKilos = inputVal / massRate;

  // Array holding <h3> and <p> to render
  const resultArr = [
    {
      heading: "Length (Meter/Feet)",
      p: `${inputVal} meters = ${metersToFeet.toFixed(
        3
      )} feet | ${inputVal} feet = ${feetToMeters.toFixed(3)} meters`,
    },
    {
      heading: "Volume (Liters/Gallons)",
      p: `${inputVal} liters = ${litersToGallons.toFixed(
        3
      )} gallons | ${inputVal} gallons = ${gallonsToLiters.toFixed(3)} liters`,
    },
    {
      heading: "Mass (Kilograms/Pounds)",
      p: `${inputVal} kilos = ${kilosToPounds.toFixed(
        3
      )} pounds | ${inputVal} pounds = ${poundsToKilos.toFixed(3)} kilos`,
    },
  ];

  // Loop through resultArr.length
  if (isContentsOn === false) {
    for (let i = 0; i < resultArr.length; i++) {
      let toRendered = `
        <div>
            <h3>${resultArr[i].heading}</h3>
            <p>${resultArr[i].p}</p>
        </div>
        `;

      resultSection.innerHTML += toRendered;
      isContentsOn = true;
    }
  }

  convertBtn.textContent = "Reset (double click)";
}

// Reset Event LISTENER Function
function reset() {
  resultSection.innerHTML = "";
  convertBtn.textContent = "Convert";
  isContentsOn = false;
}

// ADD EVENT LISTENER
convertBtn.addEventListener("click", renderEL); // Single click for converting
convertBtn.addEventListener("dblclick", reset); // Double click for reset
