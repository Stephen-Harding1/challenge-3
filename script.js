// Assignment code here
function generatePassword() {
  var length = parseInt(prompt("How long would you like the password to be?"));

  if (!Number.isInteger(length)) {
    alert("Please enter an integer!");
    return "";

  }
  if (length < 8 || length > 128) {


    alert("Please enter a number greater than 7 and less than 129.");
    return "";

  }


  var characters = prompt("What characters would you like to include?");
  if (characters.length === 0) {
    alert("Please enter characters to include in your password!")
    return "";
  }
  var password = "";
  var charLength = characters.length - 1;
  for (var i = 0; i < length; i++) {
    password += characters[Math.round(Math.random() * charLength)]

  }
  return password;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
