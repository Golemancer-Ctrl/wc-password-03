// Assignment code here

function generatePassword() {
  
  // pool of alphanumeric characters and symbols to pull from
  var alphanum = ("abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()");
  
  // container string for the generated password
  var password = "";
  
  // for loop to pull randomly selected alphanumeric chars & symbols from alphanum to generate the password  
  for (var index = 0; index < 15; index++) {
    
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