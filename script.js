// scripts

const fahrenheitField = document.querySelector("#fahrenheit");
const celsius = document.querySelector("#celsius");
const convertBtn = document.querySelector("#convert-btn");
const resetBtn = document.querySelector("#reset-btn");
const reverseBtn = document.querySelector("#reverse-btn");

// window loading reset
window.addEventListener("load",() => {
    celsius.value = "";
    fahrenheitField.innerHTML = "";
})

convertBtn.addEventListener("click", () => {
    e.preventDefault();
    convertToFahrenheit();
})

function convertToFahrenheit() {
    let inputValue = celsius.value;
    const celsiusToFahrenheit = (inputValue)*(9/5)+32
    fahrenheitField.innerHTML = `${celsiusToFahrenheit.toFixed(1)} &deg;
    c`;
    }
}