
function checkForValidCardNumber(cardNumber){

	let cardInfo = {};
	let count = 0


	for(let index = 0; index < cardNumber.length; index++){
		if(typeof(cardNumber[index]) === 'number'){
			count+=1
}

}	
	if(cardNumber.length > 14 && cardNumber.length < 17){ 
		if(count === cardNumber.length){
			if(cardNumber[0] === 4 && cardNumber.length === 16){
			cardInfo = {value: 'true', issuer: 'Visa'}
}

		 	else if(cardNumber[0] === 5 && cardNumber.length === 16){
			cardInfo = {value: 'true', issuer: 'Mastercard'}
}

		 	else if(cardNumber[0] === 6 && cardNumber.length === 16){
			cardInfo = {value: 'true', issuer: 'Discover'}
}

			else if(cardNumber[0] === 3 && cardNumber.length === 15){
			cardInfo = {value: 'true', issuer: 'American Express'}
}

			else{
			cardInfo = {value: 'false', reason: 'Issuer is unknown'}

}
}
		else{
			cardInfo = {value: 'false', reason: 'Invalid characters in card number'}
}
}	
	else{
		cardInfo = {value: 'false', reason: 'Invalid length'}	
}

	return cardInfo
}


	let cardNumArray = [3,4,4,2,6,2,1,2,5,5,5,6,7,3,3];
	console.log(checkForValidCardNumber(cardNumArray))