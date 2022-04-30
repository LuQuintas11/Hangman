let modalBg = document.querySelector(".modal-bg");
let modalClose = document.querySelector(".modal-close");

let body = document.querySelector(".body")
let img = document.querySelector(".img")


let modalIn = document.querySelector(".modal-Initiator");
let square = document.querySelector(".square")

let winModal = document.querySelector(".winner")

let wordCinema =["STAR WARS", "BATMAN", "THE KING", "JUMANJI", "SPIDERMAN", "VENOM", "FROZEN", "HARRY POTTER"]
let wordAnimal =["CAT", "RABBIT", "LION", "ZEBRA", "HORSE", "TIGER", "BEAR", "FROG", "FROG", "MONKEY", "SNAKE"]
let word = ["FOOTBALL", "BOXING", "CYCLING", "SWIMMING", "TENNIS", "CLIMBING", "BASKETBALL", "ATHLETICS", "BADMINTON"]


let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ];


function initGame() {
    createAlphabet();

    console.log("DOM is loaded")
    modalIn.classList.add("modalInt")
    square.classList.add("squareInactive")
    
    let gameCategorybuttons = document.getElementsByTagName(".game-category");
    for (let button of gameCategorybuttons) {
       button.addEventListener("click", function () {
          if (this.getAttribute("data-type") === "animals") {
              addClass = "imgAnimal";
            randomCategoryWord = wordAnimal[Math.floor(Math.random()*wordAnimal.length)]
            } else if (this.getAttribute("data-type") === "sports") {
                addClass = "imgSport";
            randomCategoryWord = wordAnimal[Math.floor(Math.random()*wordAnimal.length)]

            //     modalIn.classList.remove("modalInt")
            //   let wordsSports = word[Math.floor(Math.random() * word.length)]
            //   wordGuessed(wordsSports)
            //   img.classList.add("imgSport")
            //  square.classList.remove("squareInactive")
            //  console.log(wordsSports)
          } else if (this.getAttribute("data-type") === "cinema") {
            // addClass = "imgAnimal";
            // randomCategoryWord = wordAnimal[Math.floor(Math.random()*wordAnimal.length)]

            //  modalIn.classList.remove("modalInt")
            //  img.classList.add("imgCinema")
            //  square.classList.remove("squareInactive")
            //  let wordsCinema = wordCinema[Math.floor(Math.random()*wordCinema.length)]
            //  wordGuessed(wordsCinema)
            //  console.log(wordsCinema)
            }
            
            modalIn.classList.remove("modalInt")
            img.classList.add(addClass)
            square.classList.remove("squareInactive")
            wordGuessed(randomCategoryWord)
        }
        
    let restartGamebuttons = document.getElementsByTagName(".game-restart");
    for (button in restartGamebuttons) {
                 window.location.reload()
    }}

document.addEventListener("DOMContentLoaded", function() {
    initGame();
    runGame();
});
/*This function creates the alphabet buttons*/
function createAlphabet() {
   for (let i = 0; i < alphabet.length; i++) {
      let createButton = document.createElement("button");
      let div = document.getElementById("button");
      div.appendChild(createButton)
      createButton.className = "alphabet";
      createButton.innerHTML = alphabet[i];   

      createButton.addEventListener("click", onAlphabetClicked);

   }
}

function onAlphabetClicked (event) {
    let letter = event.target
      let alphabetValue = alphabet[i];
      if (wor.includes(alphabetValue)) {
         for (let i = 0; i < wor.length; i++) {
            if (wor[i] === alphabetValue) {
             document.getElementById("main-div").childNodes[i].textContent = alphabetValue
             pushAlphabet.push("alphabetValue")    
             letterGuessed(wor, pushAlphabet)
             letter.removeEventListener("click", e)
            }
         }
      } else {
         letter.removeEventListener("click", e)
         decreaseLifes()
      }

      }


function runGame() {
   modalBg.classList.add("bg-active");

   modalClose.addEventListener("click", function () {
      modalBg.classList.remove("bg-active")
      window.location.reload();
   })

}

/*This function compare*/
let pushAlphabet = [];
let letter;

function wordGuessed(wor) {

   for (let i = 0; i < wor.length; i++) {
      let board = document.createElement('span');
      board.className="span"
      document.getElementById('main-div').appendChild(board);
         if(wor[i]===" "){
            board.innerHTML=" ";
         }else {
            board.innerHTML="_"
         }
   }

    
      for (let i = 0; i < alphabet.length; i++) {
         let alpha = document.getElementsByClassName("alphabet")[i];
           
           }
}


/*check if the word guessed is the same one that the computer gave*/

function letterGuessed(wor, pushAlphabet){ 
if(wor.length===pushAlphabet.length){
   winModal.classList.add("win-active")
   
}}




let liveSpan = document.querySelector(".lives")
lives = 3;

function decreaseLifes() {
   lives--;
   liveSpan.textContent=`You have ${lives} shots left`
}

