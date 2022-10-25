//Arrays for all characters that are selectable by the password generator
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "_", "{", "}", "/", "?", "<", ">", "|", "=", "-"];
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let selectedChars = [];
let passwordLength;
let basket = "";

// Add event listener to generate button
const generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

//write the password to the page
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}; //end of writePassword function

//use the selected characters to randomly generate a passowrd
function generatePassword() {
  basket = "";
  selectedChars = [];
  passwordOptions();
  console.log(selectedChars);
  
    for (i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * selectedChars.length);
      const randomChar = selectedChars[randomIndex];
      basket += randomChar;
    }
    return basket;
  
};

let useUpper = false;
const upperCaseInput = document.getElementById("upper");
upperCaseInput.addEventListener("change", function () {
  useUpper = !useUpper;
  console.log("apple", useUpper)
});

let useLower = false;
const lowerCaseInput = document.getElementById("lower");
lowerCaseInput.addEventListener("change", function () {
  useLower = !useLower;
});

let useNumbers = false;
const numberInput = document.getElementById("number");
upperCaseInput.addEventListener("change", function () {
  useNumbers = !useNumbers;
});

let useCharacters = false;
const specialInput = document.getElementById("special");
specialInput.addEventListener("change", function () {
  useCharacters = !useCharacters;
});

//pick which characters to use
function passwordOptions() {
  //select length of password
  passwordLength = parseInt(prompt("How many characters would you like your password to be? Please select a number between 8 - 128"));
  if (isNaN(passwordLength) || passwordLength > 128 || passwordLength < 8) {
    window.alert("You must pick a number between 8 - 128. Try again.");
    passwordOptions();
  }
  else if (passwordLength >= 8 || passwordLength <= 128)
    window.alert("Your password will have " + passwordLength + " characters in it.");

  if (useLower) {
    selectedChars = selectedChars.concat(lowerCase);
  }
  if (useUpper) {
    selectedChars = selectedChars.concat(upperCase);
  }
  if (useNumbers) {
    selectedChars = selectedChars.concat(numbers);
  }
  if (useCharacters) {
    selectedChars = selectedChars.concat(symbols);
  }
};

