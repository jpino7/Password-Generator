// These are variables that link to the html
var generateBtn = document.querySelector("#generate")
// alert(generateBtn); ----this allows me to know button functions
var passwordText = document.querySelector("#password");


//Empty array for PW characters
var pwArray = [];

// Event Listener to generate PW button when clicked
generateBtn.addEventListener("click", buttonClicked);


// Promts User for Password Length
function buttonClicked() {
  var pwLength = prompt("How long would you like your password? Choose between 8-128 characters");
  if (pwLength < 8 || pwLength > 128) {
    alert("Please choose between 8-128");
    return buttonClicked();
  }

  // This will confirm if user wants uppercase letters 
  var upperCase = confirm("Would you like to include an Uppercase letter in your password?");
  var lowerCase = confirm("Would you like to include an Lowercase letter in your password?");
  var numbers = confirm("How about any numbers?");
  var symbols = confirm("What about any symbols?");



  // Arrays for random PW 
  var upper = ["A", "B", "C", "D", "E", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var sym = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];

  // Push arrays for user PW criteria
  var randomize = [];

  // Confirming if user wants uppercase letters
  if (upperCase) {
    randomize.push(upper);
  }

  // Confirming if user wants lowercase letters
  if (lowerCase) {
    randomize.push(...lower);
  }

  // Confirming if user wants numbers
  if (numbers) {
    randomize.push(...num);
  }

  // Confirming if user wants symbols
  if (symbols) {
    randomize.push(...sym);
  }

  // For loop goes here
  for (var i = 0; i < pwLength; i++) {
    pwArray.push(randomize[Math.floor(Math.random() * randomize.length - 1)])
    var convertString = pwArray.join("");
  }

  // Push function into HTML to make Generated PW to be seen in textarea
  passwordText.textContent = convertString;
};
