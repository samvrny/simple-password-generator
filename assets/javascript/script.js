//arrays for all characters that are selectable by the password generator
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "_", "{", "}", "/", "?", "<", ">", "|", "=", "-"];
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let selectedChars = [];
let passwordLength;
let basket = "";
let hide1 = document.getElementById("hide1");
let hide2 = document.getElementById("hide2");

//add event listener to generate button
const generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

//write the password to the page
function writePassword() {
  let password = generatePassword();

  let passwordText = document.querySelector("#password");
  passwordText.textContent = password;
};

//select what characters are going to be used in the password
let useUpper = false;
const upperCaseInput = document.getElementById("upper");
upperCaseInput.addEventListener("change", function () {
  useUpper = !useUpper;
});

let useLower = false;
const lowerCaseInput = document.getElementById("lower");
lowerCaseInput.addEventListener("change", function () {
  useLower = !useLower;
});

let useNumbers = false;
const numberInput = document.getElementById("number");
numberInput.addEventListener("change", function () {
  useNumbers = !useNumbers;
});

let useCharacters = false;
const specialInput = document.getElementById("special");
specialInput.addEventListener("change", function () {
  useCharacters = !useCharacters;
});

//use the selected characters to randomly generate a passowrd
function generatePassword() {
  basket = "";
  selectedChars = [];
  hide1.classList.add("hide")
  hide2.classList.add("hide")
  passwordLength = 0;
  passwordOptions();
  for (i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * selectedChars.length);
    const randomChar = selectedChars[randomIndex];
    basket += randomChar;
  }
  return basket;
};

function passwordOptions() {
  //make sure at least one character type is selected
  if (!useCharacters && !useLower && !useNumbers && !useUpper) {
    hide1.classList.remove("hide")
    return;
  }

  //select length of password
  const howMany = document.getElementById("how-many");
  passwordLength = howMany.value;

  //make sure the password is between 8 and 128 characters
  if (passwordLength < 8 || passwordLength > 128) {
    hide2.classList.remove("hide");
    passwordLength = 0;
    return;
  }

  //compile all of the selected character types into the selectedChars array
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

