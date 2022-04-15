let words = ["deny", "hello", "dog", "cat"];
let alphabet= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
let word = words[Math.floor(Math.random()*words.length )]

// *this function will check the amount of letters and create the spaces*/
function checkLetter(){
 for(let i=0; i<word.length;i++){
    let board = document.createElement('li');
    board.textContent=word[i];
    board.className = "blah";
    document.getElementById('main-div').appendChild(board);
 } 
 
  
}
checkLetter()

function createAlphabet(){
 
 for(let i=0; i<alphabet.length;i++){
 let createButton = document.createElement("button");
 let button = document.getElementById("button");
 createButton.innerHTML = alphabet[i]
 button.appendChild(createButton);
   
 }
  
}

createAlphabet();




function userInput(){



}