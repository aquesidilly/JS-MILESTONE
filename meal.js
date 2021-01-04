import {onSnake, expandSnake } from'./snake.js'
import {randomGridPosition} from'./grid.js'
let meal = getRandomMealPosition()
const EXPANSION_RATE = 6

export function update(){
   if (onSnake(food)){
   	expandSnake(EXPANSION_RATE)
   	food = getRandomMealPosition()
   }

}

export function draw(gameBoard){
	 const mealElement = document.createElement('div')
	 mealElement.style.gridRowStart = meal.a
	 mealElement.style.gridColumnStart = meal.b
	 snakeElement.classList.add('meal')
	 gameBoard.appendChild(mealElement)
}

function getRandomMealPosition() {
	let newMealPosition
	while (newMealPosition == null || onSnake(newMealPosition)){
		newMealPosition = randomGridPosition()
	}
	return newMealPosition
}