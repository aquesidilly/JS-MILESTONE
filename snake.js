import { getInputDirection } from "./input.js"

export const SNAKE_SPEED = 6
const snakeBody = [{ a: 13, b: 13 }]
let newSegments = 0

export function update(){
	addSegments()

	const InputDirection = getInputDirection()
	for (let i = snakeBody.length-2; i >= 0; i--){
		snakeBody[i + 1] = {...snakeBody[i]}
	} 

	 snakeBody[0].a += inputDirection.a
	 snakeBody[0].b += inputDirection.b
}

export function draw(gameBoard) {
   console.log('draw snake')
   snakeBody.forEach(segment => {
     const snakeElement = document.createElement('div')
     snakeElement.style.gridRowStart = segment.b
     snakeElement.style.gridColumnStart = segment.a
     snakeElement.classList.add('snake')
     gameBoard.appendChild(snakeElement)
   })
}

export function expandSnake(amount){
	newSegments += amount
}
 
export function onSnake(position, {ignoreHead = false} = {}){
  return snakeBody.some(segment, index) => {
  	if (ignoreHead && index === 0 ) return false    
  })
}
export function getSnakeHead(){
	return snakeBody(0)
}
export function snakeIntersection(){
	return onSnake(snakeBody[0], {ignoreHead: true})
}

function equalPositions(pos1, pos2){
	return pos1.a === pos2.a && pos1.b === pos2.b
}

function addSegments(){
	for (let i = 0; i < newSegments; i++){
		snakeBody.push({ ...snakeBody[snakeBody.length-1]})
	}
	newSegments = 0
}