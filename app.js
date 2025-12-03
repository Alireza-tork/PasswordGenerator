
const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const nums = "0123456789";
const syms = "!@#$%^&*()_+-=*/<>?{}[]";

function create(){
    let length = document.querySelector('#length').value
    let useLower = document.querySelector('#lowercase').checked
    let useUpper = document.querySelector('#uppercase').checked
    let useNumb = document.querySelector('#numbers').checked
    let useSymbols = document.querySelector('#symbols').checked

    let chars = ""
    if(useLower) chars += lower
    if(useUpper) chars += upper
    if(useNumb) chars += nums
    if(useSymbols) chars += syms

    if (chars.length===0){
        return "Select at least one option!"
    }

    let password = ''
    for(let i =0;i<length;i++){
        let randompass = Math.floor(Math.random() * chars.length)
        password +=chars[randompass]
    }
    return password
}

document.getElementById("generate").addEventListener("click", () => {
    event.preventDefault()
    document.getElementById("password").value = create();
});

document.getElementById("copy").addEventListener("click", () => {
  const pass = document.getElementById("password");
  pass.select();
  document.execCommand("copy");
});

