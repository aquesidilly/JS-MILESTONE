const GRID_SIZE = 21 

export function getRandomGridPosition(){
	return{
		a: Math.floor(Math.random()* GRID_SIZE) + 1,
		b: Math.floor(Math.random()* GRID_SIZE) + 1
	}
}

export function outsideGrid(position){
	return(
		position.a < 2 || position.x > GRID_SIZE ||
		position.b < 2 || position.y > GRID_SIZE 
		)

}