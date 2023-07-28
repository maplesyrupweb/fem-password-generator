
// Password and form
let passwordForm = document.getElementById("passwordForm");
let passwordDisplay = document.querySelector('.password');
let passwordText = document.getElementById('passwordText');
let code = document.getElementById("password");

// copy password
let handleCopyClick = document.querySelector('#copy-password');

// length of password
let length = document.getElementById("charLength").value;
let characterCount = document.querySelector('.value');

// Checkboxes
let elem = document.querySelector('input[type="range"]');
let checkBoxes = document.querySelectorAll('input[type=checkbox]');
let numberCheckBox = document.querySelector("input[id=numbers]");
let errorMessage = document.getElementById("checkBoxError")

// password strength
let strengthRatingBars = document.querySelectorAll('.bar');
let strengthbar = document.getElementById("meter");
let strengthDescription = document.querySelector('.strength-rating-text');


console.log("passwordForm is: " + passwordForm);

const CHARACTER_SETS = {
    uppercase: ['ABCDEFGHIJKLMNOPQRSTUVWXYZ', 26],
    lowercase: ['abcdefghijklmnopqrstuvwxyz', 26],
    numbers: ['1234567890', 10],
    symbols: ['!@#$%^&*()', 10]
  }
  
//------------------------------------------------------//
//           Generate random password                   //
//------------------------------------------------------//


const generateRandomPassword = (event) => {
  event.preventDefault();

  console.log("//-----------Begin-------------//");  

  let numOfCheckedBoxes = document.querySelectorAll('input[type="checkbox"]:checked').length;
  let theLength = elem.value;
  let errorFree =  validateInput();
  if (errorFree) {
    errorMessage.innerHTML  = "";

    console.log("*** the length of random password is: " + theLength)


    let generatedPassword = '';
    let includedSets = [];
    let charPool = 0;
   
    checkBoxes.forEach(box => {
      if(box.checked) {
        includedSets.push(CHARACTER_SETS[box.value][0]);
        console.log("included sets: " + includedSets );
        charPool += CHARACTER_SETS[box.value][1];
        console.log("charPool: " + charPool );
      }
    });
    console.log("Number of checked checkBoxes: " + numOfCheckedBoxes );

    // If there are checkboxes chechked for the password options
    if (includedSets) {
    for(let i=0; i<theLength; i++) {
      const randSetIndex = Math.floor(Math.random() * includedSets.length);
      // console.log("randSetIndex is " + randSetIndex);
      const randSet = includedSets[randSetIndex];
      // console.log("randSet is " + randSet);

      const randCharIndex = Math.floor(Math.random() * randSet.length);
      // console.log("randCharIndex is " + randCharIndex);
      const randChar = randSet[randCharIndex];
      // console.log("randChar is " + randChar);
      
      // add the random character to the password string
      generatedPassword += randChar;
      // console.log("generatedPassword is " + generatedPassword);
      document.getElementById("passwordText").innerHTML = generatedPassword;
    }
  }
        
    const strength = calcStrength(theLength, charPool);
    console.log("*** strength is " + strength);
    console.log("*** Password length is: " + theLength);
    console.log("*** charPool is " + charPool);
    
    styleMeter(strength);

    console.log("end of generate password function");
    console.log("//-----------End--------------//");


    }else {
      errorMessage.innerHTML = "Check at least one check box";
    }

    
}
  
 
//------------------------------------------------------//
//           Copy the password to clipboard             //
//------------------------------------------------------//

  handleCopyClick.addEventListener('click', () => {
    let text = passwordText.textContent;
    
    navigator.clipboard.writeText(`${text}`);
    
    console.log(`Password copied to clipboard. The password is: ${text}`);
    console.log(text);
    displayCopiedText();
    

    
});

//------------------------------------------------------//
//           Display the copied text confirmation       //
//------------------------------------------------------//


function displayCopiedText(){

  var Url = document.getElementById("box");
  Url.value = window.location.href;
  Url.focus();
  Url.select();
  document.getElementById("custom-tooltip").style.display = "inline";
  document.execCommand("copy");
  setTimeout( function() {
      document.getElementById("custom-tooltip").style.display = "none";
  }, 1000);

};

//------------------------------------------------------//
//          Show the input range when using slider      // 
//------------------------------------------------------//



var rangeValue = function(){
  getSliderValue();
  var newValue = elem.value;
  var target = document.querySelector('.value');
  target.innerHTML = newValue;
}

elem.addEventListener("input", rangeValue);


function getSliderValue() {
  characterCount.textContent = length;
}

//------------------------------------------------------//
//          Form event listeners                        // 
//------------------------------------------------------//

// The form

if (passwordForm) {
  console.log("***** PasswordForm is not null");
  passwordForm.addEventListener('submit', generateRandomPassword);

}

// Number checkbox
numberCheckBox.addEventListener('change', function() {
  if (this.checked) {
    console.log("Number Checkbox is checked..");
  } else {
    console.log("Number Checkbox is not checked..");
  }
});

// Uppercase characters checkbox
let uppercaseCheckBox = document.querySelector("input[id=uppercase]");

uppercaseCheckBox.addEventListener('change', function() {
  if (this.checked) {
    console.log("Uppercase Checkbox is checked..");
  } else {
    console.log("Uppercase Checkbox is not checked..");
  }
});

// Lowercase characters checkbox
let lowercaseCheckBox = document.querySelector("input[id=lowercase]");

lowercaseCheckBox.addEventListener('change', function() {
  if (this.checked) {
    console.log("Lowercase Checkbox is checked..");
  } else {
    console.log("Lowercase Checkbox is not checked..");
  }
});

// Symbol characters checkbox
let symbolsCheckBox = document.querySelector("input[id=symbols]");

symbolsCheckBox.addEventListener('change', function() {
  if (this.checked) {
    console.log("Symbols Checkbox is checked..");
  } else {
    console.log("Symbols Checkbox is not checked..");
  }
});


//------------------------------------------------------//
//          Validate checkbox input                     // 
//------------------------------------------------------//



//The Array.from() method returns an array from any 
//iterable object.

// every() returns true if all elements in an array 
// pass a test (provided as a function).

const validateInput = () => {
  // At least one box is checked
  if(Array.from(checkBoxes).every(box => box.checked === false)) {
    // throw new Error('Make sure to check at least one box');
    console.log("check at least one checkbox");
    return false;

  }
  else {
    console.log("Validate input: At least one checkbox is checked.");
    return true;
  }
}

//------------------------------------------------------//
//          Fill the bars with colors                   // 
//------------------------------------------------------//

// Fill in specified meter bars with the provided color
const styleBars = ([...barElements], color) => {
  barElements.forEach(bar => {
    bar.style.backgroundColor = color;
    bar.style.borderColor = color;
  });
}


//------------------------------------------------------//
//          Display Password Strength                   // 
//------------------------------------------------------//


// Display text description of password strength and
// fill in the appropriate meter bars
const styleMeter = (rating) => {
  const text = rating[0];
  console.log("the text is: " + text);
  const numBars = rating[1];
  console.log("the numBars is: " + numBars);
  const barsToFill = Array.from(strengthRatingBars).slice(0, numBars);
  
  resetBarStyles();

  strengthDescription.innerHTML = text;

  switch(numBars) {
    case 1:
      return styleBars(barsToFill, 'hsl(0, 91%, 63%)');
    case 2:
      return styleBars(barsToFill, 'hsl(13, 95%, 66%)');
    case 3:
      return styleBars(barsToFill, 'hsl(42, 91%, 68%)');
    case 4:
      return styleBars(barsToFill, 'hsl(127, 100%, 82%');
    default:
      console.log("Error with password strength bars")
      
  }
}

// Remove colors applied to the strength meter
const resetBarStyles = () => {
  strengthRatingBars.forEach(bar => {
    bar.style.backgroundColor = 'transparent';
    bar.style.borderColor = 'hsl(252, 11%, 91%)';
  });
}

//------------------------------------------------------//
//          Calculate Password Strength                 // 
//------------------------------------------------------//


// Calculate password entropy to determine strength
// Return an array containing
// the password strength description to display and the number
// of bars in the meter to be filled
const calcStrength = (passwordLength, charPoolSize) => {
  const strength = passwordLength * Math.log2(charPoolSize);

  if(strength < 25) {
    console.log("Too Weak!', 1]");
    return ['Too Weak!', 1];
   
  } else if (strength >= 25 && strength < 50) {
    console.log("['Weak', 2]");
    return ['Weak', 2];
  } else if (strength >= 50 && strength < 75) {
    console.log("['Medium', 3]");
    return ['Medium', 3];
  } else if (strength >= 75) {
    console.log("['Strong', 4]");
    return ['Strong', 4];
  }
}

// On page load, get the input range value
getSliderValue();