
// Waits for DOM content to load first
document.addEventListener('DOMContentLoaded', () => {

  // starting page
  let startingPage = document.getElementById("start-page");
  let button = document.getElementById("button");
  let info = document.getElementById("info");

  // Game Page 

  let gamePage = document.getElementById("game-page");
  let boxes = document.querySelectorAll(".boxes");
  let showChange = document.querySelector("#showChange"); 
  let board = Array.from(boxes); 

  // Winner Page 
  let winnerPage = document.getElementById("winner-page");
  let winningName = document.getElementById("winner-name");
  let reset = document.getElementById("quit");
  let isPlayerMove = true;

  // Board and winning combinations 

  let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

  // Home page disappears when clicked and enters onto game board 

  button.onclick = function () {
      if (startingPage.style.display !== "none") {
        startingPage.style.display = "none";
        info.style.display = "none";
      } else {
        startingPage.style.display = "block";
      }
      gamePage.style.display = "block";
      info.style.display = "none";

      //isPlayerMove = true;
      console.log('Start game');
      //playerMove();
  }

  boxes.forEach(box => box.addEventListener('click', event => {

        if(isPlayerMove === true) {
            playerMove(event, box);
            console.log('player event listener');
        }
  }))




  // Player move not working - not adding an X when clicked on the spot


  function playerMove(event, box) {

      if (box.innerText == '') {
      box.innerText += 'X';
      box.id = 'X';
      showChange.style.right = `160px`;

      console.log('player move function');
      isPlayerMove = false;
      computerMove();
      }
      
  }


  // second playerMove function created to see if code would work - it doesn't 

  /*

  function playerMove(event) {
      if (boxes.innerText = '') {
          boxes.innerText = 'X';
          boxes.id = 'X';
          //showChange.style.left = `160px`;

          // change The "changeTurn" Value False Into True
          isPlayerMove = false;
          computerMove();
          //console.log('player move');
      }
  }
  */

  // Computer Move also not working, but can call it based on the console logs 

  function computerMove(event, box) {

      if (box.innerText == "") {
         Math.floor(Math.random) * (boxes.length);
         box.innerText = 'O';
         box.id = 'O';
         isPlayerMove = true;
         playerMove();
      }

      //isPlayerMove = false;
      console.log('computer move');
      //playerMove();

  }



// code below was useed for earlier version of the game and would work for putting an X in the box 
// But only in a 2 player version. 


/*
  boxes.forEach(items => {
      items.addEventListener("click", () => {
          // Add "X" Icon If "ChangeTurn" = False
          // Add "O" Icon If "ChangeTurn" = True
          if (changeTurn == false) {
              items.innerText = 'X';
              items.id = "X";
              items.style.pointerEvents = "none";
              showChange.style.left = `160px`;
  
              // change The "changeTurn" Value False Into True
              changeTurn = true;
          } else {
              computerMove();
  
            /* A computer turn needs to exist here in some capacity. This just generate a second move made by a person */ 
            /*
              items.innerHTML = `<i class="fas fa-circle-notch"></i>`;
              items.id = "O";
              items.style.pointerEvents = "none";
              showChange.style.left = `0px`;
  
              //change The "changeTurn" Value False Into True
              //changeTurn = false;
          }
         // winningFunc();
          // drawFunc();
      })
  })
  */

  // Some earlier computer move function taken from another source

/*
  function ComputerPlayer(board) {
      this.takeTurn = function () {
          let availablePositions = board.positions.filter((p) => p.innerText === '');
          const move = Math.floor(Math.random() * (availablePositions.length - 0));
          availablePositions[move].innerText = 'O';
      }
  }
  */


 // console.log(board);


})