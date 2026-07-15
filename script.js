const passwordBox = document.getElementById("password");

const lengthSlider = document.getElementById("length");

const lengthValue = document.getElementById("lengthValue");

lengthSlider.addEventListener("input", function(){

    lengthValue.innerText = lengthSlider.value;

});

function generatePassword(){

    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const lowercase = "abcdefghijklmnopqrstuvwxyz";

    const numbers = "0123456789";

    const symbols = "!@#$%^&*()_+-={}[]<>?/";

    let characters = "";

    if(document.getElementById("uppercase").checked)
        characters += uppercase;

    if(document.getElementById("lowercase").checked)
        characters += lowercase;

    if(document.getElementById("numbers").checked)
        characters += numbers;

    if(document.getElementById("symbols").checked)
        characters += symbols;

    if(characters === ""){

        alert("Select at least one option!");

        return;

    }

    let password = "";

    for(let i=0;i<lengthSlider.value;i++){

        let randomIndex = Math.floor(Math.random()*characters.length);

        password += characters[randomIndex];

    }

    passwordBox.value = password;

}

function copyPassword(){

    if(passwordBox.value===""){

        alert("Generate a password first!");

        return;

    }

    navigator.clipboard.writeText(passwordBox.value);

    alert("Password copied to clipboard!");

}

generatePassword();