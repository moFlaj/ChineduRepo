const prompt = require('prompt-sync')();
let startTime = new Date()
let firstNumber 
let secondNumber
let noOfTries = 0
let runProgram = 0
let totalScore = 0
let startSeconds
let endSeconds

while(runProgram < 10){
	firstNumber = Math.floor(Math.random() * 101)
	secondNumber = Math.floor(Math.random() * 101)
	if(firstNumber > secondNumber){
		runProgram+=1
		if(runProgram === 1){
			console.log(`Start time is ${startTime.toTimeString()}`)
			startSeconds = startTime.getSeconds()
}
		while(true){
			console.log(`What will be the result of this operation: ${firstNumber} - ${secondNumber}`)
			let answer = Number(prompt("Answer: "))
			if(answer != (firstNumber - secondNumber)){
				noOfTries++
				
				if(noOfTries == 2){
					noOfTries = 0
					break
}
			
				else{
					console.log("Wrong answer. You have one more try for this question.")		
					continue}				
}
			else if(answer == (firstNumber - secondNumber)){
				totalScore+=1
				break
}
			

}
}
	else{continue}
}
let endTime = new Date()
console.log(`End time is ${endTime.toTimeString()}`)
endSeconds = endTime.getSeconds()
if(endSeconds < startSeconds)endSeconds = 60 + endSeconds


console.log(`Your total score is ${totalScore}.`)
console.log(`It took ${endSeconds - startSeconds} seconds to complete this exercise.`)
