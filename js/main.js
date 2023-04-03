/*Goal: Create a two player Tic-Tac-Toe game. The users should be able to click to place their X or O and if they win the program should mention their win in the DOM. Please make the game as OOP as possible.*/
//Variables
const board = document.querySelector('#board')
const info = document.querySelector('#info')
//let user know who starts
let player = 'blue'
//display text in paragraph that will change on click for who's turn
info.innerText = 'Blue goes first'


//adding elements in Javascript
const startBoxes = ['', '', '', '', '', '', '', '', '',] 

//create function that creates the board for each box (3x3)
function createBoard(){
  //grab the boxes array, for each element grab each box and the index and create an element
  startBoxes.forEach((box, index) => {
    const boxElement = document.createElement('div') // creates a div
    //also for each box, add the class box
    boxElement.classList.add('box')
    //assign an id to the index of the box element, this numbers each box:
    boxElement.id = index
    //listen for clicks for Os 
    boxElement.addEventListener('click', playersTurn)
    //put box into board each time you loop
    board.append(boxElement)
  })
}
createBoard()

//function that adds X or O:
function playersTurn(e){   //pass through event click on boxElement
  //create the circle element
  const circleDisplay = document.createElement('div')
  //create a class for the div to display a circle
  circleDisplay.classList.add(player)
  //target the event and add the circle
  e.target.append(circleDisplay)
  //if go equals the string blue then change to red, otherwise blue.
  player = player === 'blue' ? 'red' : 'blue' //overwrites intial player
  info.innerText = `it is now ${player}'s turn` //overwrites intial text
  //to be able to not choose the same box again, remove event listener (click) after each turn
  e.target.removeEventListener('click', playersTurn)
  checkScore()
}

//function to check score
function checkScore(){
  //Need all winning possibilities
  const winningCombos = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
  //need to check each box
  const allBoxes = document.querySelectorAll('.box')
  //check all boxes for winningCombo and classList
  winningCombos.forEach(combo => {
    const blueWins = combo.every(box => allBoxes[box].firstChild?.classList.contains('blue'))
    //condiontion if blue wins
    if(blueWins){
      info.innerText = 'Blue wins!'
      //trick in order to not reclick box
      allBoxes.forEach(box => box.replaceWith(box.cloneNode(true)))
      return //have to return out!
    }
  //same for red
  winningCombos.forEach(combo => {
    const redWins = combo.every(box => allBoxes[box].firstChild?.classList.contains('red'))
    if(redWins){
      info.innerText = 'Red wins!'
      //trick in order to not reclick box
      allBoxes.forEach(box => box.replaceWith(box.cloneNode(true)))
      return //have to return out!
    }

  })

  })


} 





