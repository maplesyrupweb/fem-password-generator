console.log("hello world");


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
    document.getElementById("target").innerHTML = result   
}

let text = document.getElementById('myText').innerHTML;
  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(text);
      console.log("The copied text is: " + text);
    } catch (error) {
      console.error('Issue with copy to clipboard: ', error);
    }
  }