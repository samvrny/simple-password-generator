//Arrays for all characters that are selectable by the password generator
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var symbols = ["!","@","#","$","%","^","&","*","(",")","+","_","{","}","/","?","<",">","|","=","-"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var selectedChars= [];
var passwordLength;
var basket = "";

// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

//write the password to the page
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}; //end of writePassword function

//use the selected characters to randomly generate a passowrd 
function generatePassword() {
  passwordOptions();
  for (i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * selectedChars.length);
    var randomChar = selectedChars[randomIndex];
    basket += randomChar;
  }
  return basket;
}; //end generatePassword function

//pick which characters to use
function passwordOptions() {
   var useLower = window.confirm("Would you like to use lowercase letters in your password?");
    if (useLower) {
      window.alert("Your password will have lowercase letters.");
    }
    else if (!useLower) {
      window.alert("Your password will not have lowercase letters.");
    }
   var useUpper = window.confirm("Would you like to use uppercase letters?");
    if (useUpper) {
      window.alert("Your password will have uppercase letters.");
    }
    else if (!useUpper) {
      window.alert("Your password will not have uppercase letters.");
    }
   var useNumbers = window.confirm("Would you like to use numbers?");
   if (useNumbers) {
    window.alert("Your password will have numbers.");
   }
   else if (!useNumbers) {
    window.alert("Your password will not have numbers.");
   }
   var useCharacters = window.confirm("Would you like to use special characters?");
   if (useCharacters) {
    window.alert("Your password will have special characters");
   }
   else if (!useCharacters) {
    window.alert("Your password will not have special characters.");
   }
 
  if (!useLower && !useUpper && !useNumbers && !useCharacters) {
    window.alert("You must confirm you would like to use one or more character types to use in your password.");
    passwordOptions();
  }
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
}; //End of passwordOptions function
