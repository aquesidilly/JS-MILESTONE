import{ update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection} from'./snake.js'
import{ update as updatemeal, draw as drawmeal} from'./meal.js'
import{ outsideGrid } from'./grids.js'

let lastRenderTime = 0
let gameOver = false
const gameBoard=document.getElementById('gameBoard')

function main(currentTime) {
	if (gameOver){
	 if(confirm('lost. Press ok to restart')){
	 	window.location = '/'
	 }
	  return 
	}
	window.requestAnimationframe(main)
	const secondsSincelastRenderTime = (currentTime - lastRenderTime) / 1000
	If (secondsSincelastRenderTime < 1 / SNAKE_SPEED) return

	console.log('Render')
	lastRenderTime=currentTime
	console.log(currentTime)
	update()
	draw()
}
window.requestAnimationframe(main)

function update(){
  updateSnake()
  updatemeal()
  checkDeath()
}
function draw(){
  gameBoard.innerHTML=''	
  drawSnake(gameBoard)
  drawmeal(gameBoard)
}
function checkDeath() {
	gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}