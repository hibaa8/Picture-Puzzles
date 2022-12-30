let score=0
let shuffled=false
let gameOn=true
let grid = {}
let originalGrid = {}

const selectedParts=[]
pieceSelected = (index) => {
	if(gameOn && shuffled){
		document.getElementById(`img-${index}`).style.opacity = 0.6
		selectedParts.push(index)
		if(selectedParts.length === 2){
			switchPieces()
		}
		score++
		document.getElementById('score').innerHTML = score;
	}
}

switchPieces = () => {
    let x = grid[selectedParts[0]] 
    grid[selectedParts[0]] = grid[selectedParts[1]]
    grid[selectedParts[1]] = x
    updateGrid()
	document.getElementById(`img-${selectedParts[0]}`).style.opacity = 1
	document.getElementById(`img-${selectedParts[1]}`).style.opacity = 1
	selectedParts.length=0
}

updateGrid = () => {
    for (key in grid){
        id = `img-${key}`
        document.getElementById(id).src = grid[key]
    }

	let gridUnscrambled = function() {
		for(index in grid){
			console.log(grid[index])
			console.log(originalGrid[index])
			if(grid[index] !== originalGrid[index]){
				return false
			}
		}
		return true	
	}

	if(gameOn && gridUnscrambled()){
			gameOn=false;
			endGame()
	}
}

rearrangeGrid = () => {
	score = 0
	for(let i = 0; i < 10; i++){
		selectedParts.push(Math.round(Math.random() * 15), Math.round(Math.random() * 15))
		switchPieces()		
		selectedParts.length=0
	}
	if(!gameOn || !shuffled){
		gameOn = shuffled = true
	}
	
}

endGame = () => {
	(!gameOn) ? document.getElementById('outcome').innerHTML = "You Won!": 
	document.getElementById('outcome').innerHTML = ""
}
	
