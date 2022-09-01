// Assignment code here

// generates randomized password of varying length and mixed alphanumeric characters/symbols
function generatePassword() {
  
  // pool of alphanumeric characters and symbols to pull from
  
  var lowercase = ("abcdefghijklmnopqrstuvwxyz");
  var numList = ("1234567890");
  var uppercase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  var symbols = ("!@#$%^&*()?");
  
  var alphanum = ("");
  var password = "";

  // user prompts for pw criteria (numbers, case size, symbols, and length)
  var num = confirm("Do you want numbers?");
  var low = confirm("Do you want lowercase letters?");
  var up = confirm("Do you want uppercase letters?");
  var sym = confirm("Do you want symbols?");

  var long = Number.parseInt(window.prompt("Enter the number of characters you want your password to have.  Minimum 8.  Maximum 128."));


  // sets length for the password to between 8 and 128 characters
  if (long > 128) {
    var rLength = 127;
    alert("Maximum character limit 128!");
  } else if (long < 8) {
    var rLength = 7;
    alert("Minimum character limit 8!");
  } else {
    var rLength = long - 1;
  }

  //if statements determining the pool of potential characters to draw from
  if (num) var alphanum = alphanum + numList;
  if (low) var alphanum = alphanum + lowercase;
  if (up) var alphanum = alphanum + uppercase;
  if (sym) var alphanum = alphanum + symbols;
  
  // for loop to pull randomly selected alphanumeric chars & symbols from alphanum to generate the password  
  for (var index = 0; index <= rLength; index++) {
    
    // uses Math.floor and Math.random to generate a random number within the length of alphanum
    var rNum = Math.floor(Math.random()*alphanum.length);

    // uses substring to pull that character from alphanum and attach it to the password string, generating it
    var password = password += alphanum.substring(rNum, rNum+1);
  }

  // ends the function and returns the newly-generated password
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
