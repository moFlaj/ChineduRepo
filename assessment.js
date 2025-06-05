

function questions(pickQuestionNum, shuffledQuestions){
	let selectedQuestion = ''

	for(let index = 0; index < shuffledQuestions.length; index++){
		if(pickQuestionNum == index){
			selectedQuestion = shuffledQuestions[index]
		}
	}
	return selectedQuestion

}

function showOptions(pickedQuestion, options){
	let option = []
	if(pickedQuestion === "What is the capital of Nigeria?"){
		option = options.QUESTION1
	}
	else if(pickedQuestion === "Who is the president of Nigeria?"){
		option = options.QUESTION2
	}
	else if(pickedQuestion === "Which of these teams won UCL 2025?"){
		option = options.QUESTION3
	}
	else if(pickedQuestion === "Product of 5 and 6 is?"){
		option = options.QUESTION4
	}
	else if(pickedQuestion === "What year did Nigeria gain independence?"){
		option = options.QUESTION5
	}
	else if(pickedQuestion === "10 divided by 5 is?"){
		option = options.QUESTION6
	}
	else if(pickedQuestion === "Who scored the winning penalty in the final of the FIFA world cup 2022?"){
		option = options.QUESTION7
	}
	else if(pickedQuestion === "Which of these options is not a primitive data type?"){
		option = options.QUESTION8
	}
	else if(pickedQuestion === "One of these is not a keyword in java?"){
		option = options.QUESTION9
	}
	else if(pickedQuestion === "What is the operator '//' called in python?"){
		option = options.QUESTION10
	}
	

	for(let index = 0; index < option.length; index++)console.log(option[index])

}

function pickedOptionCorrectWrong(pickedOption, question, questionAlreadyAnswered1){
	let correctOrWrong = ''
	let convertOptionToLower = pickedOption.toLowerCase()

	if(question === "What is the capital of Nigeria?" && convertOptionToLower === 'a'){
		correctOrWrong = 'Correct'
	
	}
	else if(question === "Who is the president of Nigeria?" && convertOptionToLower === 'b'){
		correctOrWrong = 'Correct'
		
	}
	else if(question === "Which of these teams won UCL 2025?" && convertOptionToLower === 'd'){
		correctOrWrong = 'Correct'
		
	}
	else if(question === "Product of 5 and 6 is?" && convertOptionToLower === 'b'){
		correctOrWrong = 'Correct'
		
	}
	else if(question === "What year did Nigeria gain independence?" && convertOptionToLower === 'c'){
		correctOrWrong = 'Correct'
		
	}
	else if(question === "10 divided by 5 is?" && convertOptionToLower === 'a'){
		correctOrWrong = 'Correct'
		
	}
	else if(question ===  "Who scored the winning penalty in the final of the FIFA world cup 2022?" && convertOptionToLower === 'c'){
		correctOrWrong = 'Correct'
		
	}
	else if(question ===  "Which of these options is not a primitive data type?" && convertOptionToLower === 'a'){
		correctOrWrong = 'Correct'
		
	}
	else if(question ===  "One of these is not a keyword in java?" && convertOptionToLower === 'd'){
		correctOrWrong = 'Correct'
		
	}
	else if(question ===  "What is the operator '//' called in python?" && convertOptionToLower === 'b'){
		correctOrWrong = 'Correct'
		
	}

	else{
		correctOrWrong = "Wrong"
	}
	return correctOrWrong

}


function showAnswerForQ(question, answers){
	let correctAnswer = ''
	
	if(question === "What is the capital of Nigeria?"){
		correctAnswer = answers.QUESTION1[0]
	}

	else if(question === "Who is the president of Nigeria?"){
		correctAnswer = answers.QUESTION2[1]
	}
	else if(question === "Which of these teams won UCL 2025?"){
		correctAnswer = answers.QUESTION3[3]
	}
	else if(question === "Product of 5 and 6 is?"){
		correctAnswer = answers.QUESTION4[1]
	}
	else if(question === "What year did Nigeria gain independence?"){
		correctAnswer = answers.QUESTION5[2]
	}
	else if(question === "10 divided by 5 is?"){
		correctAnswer = answers.QUESTION6[0]
	}
	else if(question === "Who scored the winning penalty in the final of the FIFA world cup 2022?"){
		correctAnswer = answers.QUESTION7[2]
	}
	else if(question === "Which of these options is not a primitive data type?"){
		correctAnswer = answers.QUESTION8[0]
	}
	else if(question === "One of these is not a keyword in java?"){
		correctAnswer = answers.QUESTION9[3]
	}
	else if(question === "What is the operator '//' called in python?"){
		correctAnswer = answers.QUESTION10[1]
	}
	
	return "Correct answer is " + correctAnswer

}


const prompt = require('prompt-sync')()
let runQuestionnaire = 0
let totalScore = 0
let allQuestions = ["What is the capital of Nigeria?", "Who is the president of Nigeria?", "Which of these teams won UCL 2025?", "Product of 5 and 6 is?", "What year did Nigeria gain independence?", "10 divided by 5 is?", "Who scored the winning penalty in the final of the FIFA world cup 2022?", "Which of these options is not a primitive data type?", "One of these is not a keyword in java?", "What is the operator '//' called in python?"]

const options = {
QUESTION1: ['A. Abuja', 'B. Akwa-Ibom', 'C. Lagos', 'D. Kwara'],
QUESTION2: ['A. Buhari', 'B. Tinubu', 'C. Atiku', 'D. Ribadu'],
QUESTION3: ['A. Barcelona', 'B. Inter milan', 'C. Man utd', 'D. PSG'],
QUESTION4: ['A. 56', 'B. 30', 'C. 45', 'D. 98'],
QUESTION5: ['A. 1988', 'B. 1987', 'C. 1960', 'D. 1999'],
QUESTION6: ['A. 2', 'B. 4', 'C. 3.7', 'D. 44'],
QUESTION7: ['A. Messi', 'B. Mbappe', 'C. Montiel', 'D. Kolo-Muani'],
QUESTION8: ['A. String', 'B. int', 'C. float', 'D. double'],
QUESTION9: ['A. int', 'B. catch', 'C. public', 'D. variable'],
QUESTION10: ['A. true division', 'B. floor division', 'C. modulo', 'D. addition']
}

while(runQuestionnaire < 10){
	console.log('Test of ten questions')
	let runTenQuestions = true
	let answeredQuestions = []
	
	while(runTenQuestions){
		if(runQuestionnaire == 10){
				runTenQuestions = false
				continue
		}
		let pickQuestion = Number(prompt("Pick a number from 0 - 9: "))
		let repeatQuestions = true
		let retry = 0
		while(repeatQuestions){
			let pickedQuestion = questions(pickQuestion,allQuestions)
			
			if(answeredQuestions.includes(pickedQuestion) && retry == 0){
				console.log("Question has already been answered. Pick another question.")
				repeatQuestions = false
				continue
			}
			else{
				answeredQuestions.push(pickedQuestion)
				console.log(pickedQuestion)
				console.log(showOptions(pickedQuestion, options))
				let pickedOption = prompt("Option: ")
				console.log(pickedOptionCorrectWrong(pickedOption,pickedQuestion))
				let answer = pickedOptionCorrectWrong(pickedOption,pickedQuestion)
				if(answer == 'Wrong' && retry <= 2){
					if(retry == 2){
						repeatQuestions = false
						runQuestionnaire += 1
						console.log(showAnswerForQ(pickedQuestion,options))
						continue
					}
					retry += 1
					continue
				}
				else if(answer == 'Correct' && retry <= 2){
					totalScore+=1
					runQuestionnaire += 1
					repeatQuestions = false
				}

			}
		}
	}

	
}
console.log(`Total score is ${totalScore} out of 10`)

