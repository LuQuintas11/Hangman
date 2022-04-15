document.addEventListener("DOMContentLoaded", function(){
   console.log("hola")
});

let words = ["DENY", "HELLO", "DOG", "CAT"];

let alphabet= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
let word = words[Math.floor(Math.random()*words.length )]
console.log(word)
// *this function will check the amount of letters and create the spaces*/
function checkLetter(){
 for(let i=0; i<word.length;i++){
    let board = document.createElement('li');
    board.textContent= "__";
 
    board.className = "blah";
    document.getElementById('main-div').appendChild(board);
 } 
 
  
}
checkLetter();

function createAlphabet(){
  for(let i=0; i<alphabet.length;i++){
    let createButton = document.createElement("button");
    let div= document.getElementById("button");
    div.appendChild(createButton)
    createButton.className="alphabet";
    createButton.innerHTML = alphabet[i];
   
  }
}
createAlphabet();


for(let i=0; i<alphabet.length;i++){
   let alpha = document.getElementsByClassName("alphabet")[i];
   alpha.addEventListener("click", function(event){
      event.target
      let alphabetValue = alphabet[i];
   // console.log(alphabetValue);
    if(word.includes(alphabetValue)){
       for(let i =0; i<word.length; i++){
          if(word[i]===alphabetValue){
            document.getElementById("main-div").childNodes[i].textContent=alphabetValue
          }
       } 
    }else{alert("your loose")}
 
   })
}
