let quoteText = document.querySelector('#password-text');

let handleCopyClick = document.querySelector('#copy-password');
        

function generatePassword() {

 let length = document.getElementById("charLength").value;

    console.log(length);

    document.getElementById("theLength").innerHTML = length;

    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let result = ' ';
    const charactersLength = characters.length;
    for(let i = 0; i < length; i++) {
        result += 
        characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    console.log("The answer is: " + result);
    document.getElementById("password-text").innerHTML = result   
}


  handleCopyClick.addEventListener('click', () => {
    let text = quoteText.textContent;
    
    navigator.clipboard.writeText(`${text}`);

    console.log(text);
    alert(`Password copied to clipboard. The password is: ${text}`);
});

var elem = document.querySelector('input[type="range"]');

var rangeValue = function(){
  var newValue = elem.value;
  var target = document.querySelector('.value');
  target.innerHTML = newValue;
}

elem.addEventListener("input", rangeValue);