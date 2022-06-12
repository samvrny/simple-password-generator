//Arrays for all characters that are selectable by the password generator
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var symbols = ["!","@","#","$","%","^","&","*","(",")","+","_","{","}","/","?","<",">","|","=","-"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];

// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

//this will be the generatePassword function

//This will be the function for determining the length of the password, and which
//characters to use. function to be named "passwordOptions"

function generatePassword() {
  passwordLength = parseInt(prompt("How many characters would you like your password to be? Please select a number between 8 - 128"));
  if (isNaN(passwordLength) || passwordLength > 128 || passwordLength < 8) {
    window.alert("You must pick a number between 8 - 128. Try again.");
    generatePassword();
  }
   var useLower = window.confirm("Would you like to use lowercase letters in your password?");
   var useUpper = window.confirm("Would you like to use uppercase letters?");
   var useNumbers = window.confirm("Would you like to use numbers?");
   var useCharacters = window.confirm("Would you like to use special characters?");

   
};

generatePassword();
