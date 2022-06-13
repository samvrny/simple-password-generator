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

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

function generatePassword() {
  passwordOptions();
  //remove these console logs before submission as they will not be needed.
  console.log(selectedChars);
  console.log(passwordLength);

  for (i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * selectedChars.length);
    var randomChar = selectedChars[randomIndex];
    console.log(randomChar);
    basket += randomChar;
  }
  return basket;
}; 

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
 //NOTE TO SELF: THe "Basket" That is selectedChars is just being filled
 //by the inputs from here. There doesn't need to be else if's, because each
 //prompt that is confirmed "fills" the "selectedChars basket" with the corresponding
 //Array. each one that is not confirmed is ignored.
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
}; //End of password options function
