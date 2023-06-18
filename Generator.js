var generateBtn = document.querySelector("#generate");
// var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
// var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
// var specialCharacters = [" 1234567890!@#$%^&*()_+; "];

function promptQuestions() {
  var pwLength = parseInt(window.prompt('How many characters should your password be? \n Must be a minimum of 8 characters.'));
  if (Number.isNaN(pwLength) || pwLength < 8 || pwLength > 128) {
    window.alert("Invalid input. Please enter a numerical value between 8 and 128.");
    return null;
  }

 var incUpperCase = window.confirm('Would you like to include uppercase?');
 var incLowerCase = window.confirm('Would you like to add lower case characters?');
 var incSpecialCharacters = window.confirm('Would you like to include special characters?');
 var incNumbers = window.confirm('Would you like to include numbers in your password?'); 

  var userPWRequirements = {
    length: pwLength,
    upperCase: incUpperCase,
    lowerCase: incLowerCase,
    specialChars: incSpecialCharacters,
    numbers: incNumbers,
  };

  return userPWRequirements;
}


function generatePassword() {
  var options = promptQuestions();

  if(!options) {
  }
  var charset = "";
  if (option.upperCase){
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (options.lowerCase) {
  charset += "abcdefghijklmnopqrstuvwxyz";
}
  if (options.specialChars){
  charset += "1234567890!@#$%^&*()_+; ";
} 
  if (options.numbers){
  charset += "0123456789";
}

var password = "";
for (var i = 0; i<options.length; i++) {
   var randomIndex = Math.floor(Math.random() * charset.length);
  password += charset.charAt(randomIndex);
  }
  return password;
}

function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click",writePassword);