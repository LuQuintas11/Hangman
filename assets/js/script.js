let modalBg = document.querySelector(".modal-bg");
let modalClose = document.querySelector(".modal-close");

let body = document.querySelector(".body")
let img = document.querySelector(".img")


let modalIn = document.querySelector(".modal-Initiator");
let square = document.querySelector(".square")

let winModal = document.querySelector(".winner")

let wordCinema = ["STAR WARS", "BATMAN", "THE KING", "JUMANJI", "SPIDERMAN", "VENOM", "FROZEN", "HARRY POTTER"]
let wordAnimal = ["CAT", "RABBIT", "LION", "ZEBRA", "HORSE", "TIGER", "BEAR", "FROG", "FROG", "MONKEY", "SNAKE"]
let word = ["FOOTBALL", "BOXING", "CYCLING", "SWIMMING", "TENNIS", "CLIMBING", "BASKETBALL", "ATHLETICS", "BADMINTON"]


let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ];


 function initGame () {
   //createAlphabet()
   modalIn.classList.add("modalInt")
   square.classList.add("squareInactive")

   let buttons = document.getElementsByTagName("button");
   for (let button of buttons) {
      button.addEventListener("click", function () {
         if (this.getAttribute("data-type") === "animals") {
          
            addClass = "imgAnimal"
           
            randomCategoryWord = wordAnimal[Math.floor(Math.random()*wordAnimal.length)]
            
         } else if (this.getAttribute("data-type") === "sports") {
          
            randomCategoryWord= word[Math.floor(Math.random() * word.length)]
            
            addClass ="imgSport"
            
            
         } else if (this.getAttribute("data-type") === "cinema") {
           
            addClass = "imgCinema"
          
            randomCategoryWord = wordCinema[Math.floor(Math.random() * wordCinema.length)]
         
            console.log(randomCategoryWord)
         } else if (this.getAttribute("data-type") === "win") {
            window.location.reload()

         } else if (this.getAttribute("data-type") === "reset") {
            window.location.reload()
         }

         img.classList.add(addClass)
         wordGuessed(randomCategoryWord)
         square.classList.remove("squareInactive")
         modalIn.classList.remove("modalInt")
      })

   }

};

document.addEventListener("DOMContentLoaded", function() {
   initGame();
  // runGame();
});

/*This function creates the alphabet buttons*/
function createAlphabet() {
   for (let i = 0; i < alphabet.length; i++) {
      let createButton = document.createElement("button");
      let div = document.getElementById("button");
      div.appendChild(createButton)
      createButton.className = "alphabet";
      createButton.innerHTML = alphabet[i];   
    

   }
}

createAlphabet()
/*This function compare*/
let pushAlphabet = [];
let letter;

let alphabetValue;




function runGame() {
   modalBg.classList.add("bg-active");

   modalClose.addEventListener("click", function () {
      modalBg.classList.remove("bg-active")
      window.location.reload();
   })

}




function wordGuessed(randomCategoryWord) {

   for (let i = 0; i < randomCategoryWord.length; i++) {
      let board = document.createElement('span');
      board.className = "span"
      document.getElementById('main-div').appendChild(board);
      if (randomCategoryWord[i] === " ") {
         board.innerHTML = " ";
      } else {
         board.innerHTML = "_"
      }
   }

   for (let i = 0; i < alphabet.length; i++) {
         let alpha = document.getElementsByClassName("alphabet")[i];
         alpha.addEventListener("click", function e(event) {
            let letter = event.target
            let alphabetValue = alphabet[i];
            if (randomCategoryWord.includes(alphabetValue)) {
               for (let i = 0; i < randomCategoryWord.length; i++) {
                  if (randomCategoryWord[i] === alphabetValue) {
                     document.getElementById("main-div").childNodes[i].textContent = alphabetValue
                     pushAlphabet.push("alphabetValue")
                     letterGuessed(randomCategoryWord, pushAlphabet)
                     letter.removeEventListener("click", e)
                  }
               }
            } else {
               letter.removeEventListener("click", e)
               decreaseLifes()
            }
   
         })
   }}

   // for (let i = 0; i < alphabet.length; i++) {
   //    let alpha = document.getElementsByClassName("alphabet")[i];
        
   //      }

   // for (let i = 0; i < alphabet.length; i++) {
   //    let alpha = document.getElementsByClassName("alphabet")[i];
   //    alpha.addEventListener("click", function e(event) {
   //       let letter = event.target
   //       let alphabetValue = alphabet[i];
   //       if (wor.includes(alphabetValue)) {
   //          for (let i = 0; i < wor.length; i++) {
   //             if (wor[i] === alphabetValue) {
   //                document.getElementById("main-div").childNodes[i].textContent = alphabetValue
   //                pushAlphabet.push("alphabetValue")
   //                letterGuessed(wor, pushAlphabet)
   //                letter.removeEventListener("click", e)
   //             }
   //          }
   //       } else {
   //          letter.removeEventListener("click", e)
   //          decreaseLifes()
   //       }

   //    })
   // }
//}


/*check if the word guessed is the same one that the computer gave*/

function letterGuessed(randomCategoryWord, pushAlphabet) {
   // Remove all spaces from `wor` before comparing.
   if (randomCategoryWord.length === pushAlphabet.length) {
      winModal.classList.add("win-active")

   }
}




// let liveSpan = document.querySelector(".lives")
// lives = 3;

// function decreaseLifes() {
//    lives--;
//    liveSpan.textContent = `You have ${lives} shots left`
//    if (lives === 0) {
//       lives = 3;
//       runGame()
//    }
// }
