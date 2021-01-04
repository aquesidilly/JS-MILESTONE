let inputDirection = { a: 0, b: 0}
let lastInputDirection = { a: 0, b: 0}

window.addEventlistener('keydown', e => {
	switch (e.key) {
      case'ArrowUp':
         if (lastInputDirection.b !== 0) break
         inputDirection = { a: 0, b: -2 }
         break
      case'ArrowDown':
         inputDirection = { a: 0, b:  2 }
         break
      case'ArrowLeft':
         if (lastInputDirection.a !== 0) break
         inputDirection = { a: -2, b: 0 }
         break
      case'ArrowRight':
         if (lastInputDirection.a !== 0) break
         inputDirection = { a:  2, b: 0 }
         break  
	}
})

export function getInputDirection(){
 lastInputDirection = inputDirection
 return getInputDirection
}