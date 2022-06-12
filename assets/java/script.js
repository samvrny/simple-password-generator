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
//This is where I will need a lot of help. Need to basically make the inputs from password
//Options plug in here to spit out a password.
function generatePassword () {
  passwordOptions();
}

function passwordOptions() {
  //later on add alerts as to whether you are confirming yes or no to these questions
  //also need to add a description of what questions will be asked by the user?
   var useLower = window.confirm("Would you like to use lowercase letters in your password?");
   var useUpper = window.confirm("Would you like to use uppercase letters?");
   var useNumbers = window.confirm("Would you like to use numbers?");
   var useCharacters = window.confirm("Would you like to use special characters?");
 
  if (!useLower && !useUpper && !useNumbers && !useCharacters) {
    window.alert("You must confirm you would like to use one or more character types to use in your password.");
    passwordOptions();
  }

  passwordLength = parseInt(prompt("How many characters would you like your password to be? Please select a number between 8 - 128"));
    if (isNaN(passwordLength) || passwordLength > 128 || passwordLength < 8) {
      window.alert("You must pick a number between 8 - 128. Try again.");
      passwordOptions();
      //I need to know here how to make this question loop back to ask it again.
    }
  //figure out if .concat is necessary to make this all work/password will generate randomly
  //ask how to incorporate all of the characters into the proper order/and make sure they 
  //will all generate. i.e. the selected characters will correctly generate
  //is there a more simple way to write all of this code out? AKA to make the confirmations 
  //register and be used without having to type out an insane amount of code?

  //If I write it out this way, do I also have to write out all the code for false values?
  if (useLower) {
    selectedChars = lowerCase;
  }
  else if (useLower && useUpper) {
    selectedChars = lowerCase, upperCase;
  }
  else if (useLower && useNumbers) {
    selectedChars = lowerCase, numbers;
  }
  else if (useLower && useCharacters) {
    selectedChars = lowerCase, symbols;
  }
  else if (useLower && useUpper && useNumbers) {
    selectedChars = lowerCase, upperCase, numbers;
  }
  else if (useLower && useUpper && useCharacters) {
    selectedChars = lowerCase, upperCase, symbols;
  }
  else if (useLower && useCharacters && useNumbers) {
    selectedChars = lowerCase, numbers, symbols;
  }
  else if (useLower && useUpper && useNumbers && useCharacters) {
    selectedChars = lowerCase, upperCase, numbers, symbols;
  }
  else if (useUpper) {
    selectedChars = upperCase;
  }
  else if (useUpper && useNumbers) {
    selectedChars = upperCase, numbers;
  }
  else if (useUpper && useCharacters) {
    selectedChars = upperCase, symbols;
  }
  else if (useUpper && useNumbers && useCharacters) {
    selectedChars = upperCase, numbers, symbols;
  }
  else if (useNumbers) {
    selectedChars = numbers;
  }
  else if (useNumbers && useCharacters) {
    selectedChars = numbers, symbols;
  }
  else if (useCharacters) {
    selectedChars = symbols;
  }
}; // end of passwordOptions function
