//global scope
const board = document.querySelector('#board')
const info = document.querySelector('#info')
let player = 'blue'
info.innerText = 'Blue goes first'
const startBoxes = ['', '', '', '', '', '', '', '', '',] 



class Tictactoe{
  createBoard(){
   
    startBoxes.forEach((box, index) => {
      const boxElement = document.createElement('div') // 
      boxElement.classList.add('box')
      boxElement.id = index
      boxElement.addEventListener('click', e => this.playersTurn(e))
      board.append(boxElement)
    })
  }

  checkScore(){
    const winningCombos = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
    console.log('Hey im working')
    const allBoxes = document.querySelectorAll('.box')
    winningCombos.forEach(combo => {
      const blueWins = combo.every(box => allBoxes[box].firstChild?.classList.contains('blue'))
      if(blueWins){
        info.innerText = 'Blue wins!'
        allBoxes.forEach(box => box.replaceWith(box.cloneNode(true)))
        return
      }
    })
    winningCombos.forEach(combo => {
      const redWins = combo.every(box => allBoxes[box].firstChild?.classList.contains('red'))
      if(redWins){
        info.innerText = 'Red wins!'
        allBoxes.forEach(box => box.replaceWith(box.cloneNode(true)))
        return
      }
  
    })
  
   
  }

  playersTurn(e){
    const circleDisplay = document.createElement('div')
    circleDisplay.classList.add(player)
    e.target.append(circleDisplay)
    player = player === 'blue' ? 'red' : 'blue'
    info.innerText = `it is now ${player}'s turn` 
    console.log(this)
    this.checkScore()
    e.target.removeEventListener('click', e => this.playersTurn(e))
    
  }

 
}

const ttt = new Tictactoe()
ttt.createBoard()