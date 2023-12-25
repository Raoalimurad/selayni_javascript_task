let inputslider = document.getElementById("inputslider");
let sliderValue = document.getElementById("sliderValue");
let passbox = document.getElementById("passbox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let number = document.getElementById("number");
let symbol = document.getElementById("symbol");
let generateBtn = document.getElementById("generateBtn");
let copyIcon = document.getElementById("copyIcon");

sliderValue.textContent = inputslider.value;

inputslider.addEventListener("input", () => {
    sliderValue.textContent = inputslider.value;
    // Regenerate password when the slider is moved
    passbox.value = generatePassword();
});

generateBtn.addEventListener("click", () => {
    // Regenerate password when the button is clicked
    passbox.value = generatePassword();
});

let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChar = "abcdefghijklmnopqrstuvwxyz";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*";

function generatePassword() {
    let storePass = "";
    let allChars = "";
    allChars += lowercase.checked ? lowerChar : "";
    allChars += uppercase.checked ? upperChar : "";
    allChars += number.checked ? allNumbers : "";
    allChars += symbol.checked ? allSymbols : "";

    // Generate a password with a length specified by the slider value
    for (let i = 0; i < inputslider.value; i++) {
        storePass += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }

    return storePass;
}


copyIcon.addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(passbox.value);
        copyIcon.innerText = "check";
        copyIcon.title = "Password copied";

        setTimeout(() => {
            copyIcon.innerText = "content_copy";
            copyIcon.title = "Copy to Clipboard";
        }, 2000);
    } catch (err) {
        console.error('Unable to copy to clipboard', err);
        // Handle the error if clipboard write fails
    }
});
