const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let genPassEl = document.getElementById("genPass-el")
let passOneEl = document.getElementById("passOne-el")
let passTwoEl = document.getElementById("passTwo-el")

function PassGen(){
    for(let i=0; i<30; i++){
        let randomArrIndex = Math.floor(Math.random()*characters.length)

        if(i<15){
            passOneEl.textContent += characters[randomArrIndex]
        }else{
            passTwoEl.textContent += characters[randomArrIndex]
        }
    }
}



