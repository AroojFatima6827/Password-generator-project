const rangeInput = document.getElementById("length");
const rangeValue = document.getElementById("range-value");

function updateSlider() {
    const min = rangeInput.min;
    const max = rangeInput.max;
    const value = rangeInput.value;
    
    
    rangeValue.textContent = value;


    const progress = ((value - min) / (max - min)) * 100;
    rangeInput.style.setProperty("--progress", `${progress}%`);
}


rangeInput.addEventListener("input", updateSlider);


updateSlider();
const strengthLevel = document.querySelector(".strength-level");
const bars = document.querySelectorAll(".bar");
const generateBtn = document.querySelector(".generate-btn");

function updateStrength(strength) {
    let levels = ["WEAK", "MEDIUM", "STRONG", "VERY STRONG"];
    let colors = ["red", "yellow", "lightgreen", "green"];
    
    strengthLevel.textContent = levels[strength];
    bars.forEach((bar, index) => {
        if (index <= strength) {
            bar.classList.add("filled");
            bar.style.background = colors[strength];
        } else {
            bar.classList.remove("filled");
            bar.style.background = "transparent";
            bar.style.border = "1px solid grey";
        }
    });
}


generateBtn.addEventListener("click", () => {
    let randomStrength = Math.floor(Math.random() * 4); 
    updateStrength(randomStrength);
});


document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.querySelector(".input-field input");
    const copyIcon = document.querySelector(".img img");
    const generateBtn = document.querySelector(".generate-btn");
    const rangeInput = document.getElementById("length");
    const rangeValue = document.getElementById("range-value");

    const uppercaseCheckbox = document.getElementById("uppercase");
    const lowercaseCheckbox = document.getElementById("lowercase");
    const numbersCheckbox = document.getElementById("numbers");
    const symbolsCheckbox = document.getElementById("symbols");

    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+=-{}[]|:;<>?,./";

    
    rangeInput.addEventListener("input", function () {
        rangeValue.textContent = rangeInput.value;
    });

    function generatePassword() {
        let selectedChars = "";
        let passwordLength = parseInt(rangeInput.value);
        let password = "";

        if (uppercaseCheckbox.checked) selectedChars += uppercaseChars;
        if (lowercaseCheckbox.checked) selectedChars += lowercaseChars;
        if (numbersCheckbox.checked) selectedChars += numberChars;
        if (symbolsCheckbox.checked) selectedChars += symbolChars;

        if (selectedChars.length === 0) {
            passwordInput.value = "Select options!";
            return;
        }

        for (let i = 0; i < passwordLength; i++) {
            let randomIndex = Math.floor(Math.random() * selectedChars.length);
            password += selectedChars[randomIndex];
        }

        passwordInput.value = password;
    }

    generateBtn.addEventListener("click", generatePassword);


    copyIcon.addEventListener("click", function () {
        if (passwordInput.value !== "") {
            navigator.clipboard.writeText(passwordInput.value);
            alert("Password copied to clipboard!");
        }
    });
});
