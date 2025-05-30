
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

			else if(cardNumber[0] !== 6  && cardNumber[0] !== 5 && cardNumber[0] !== 4 && cardNumber[0] !== 3){
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


	let cardNumArray = [5,4,4,2,6,2,1,2,5,5,5,6,7,3,3,8];
	console.log(checkForValidCardNumber(cardNumArray));



























































function getKeyByValue(object, value) {
    // Get array of object values
    const values = Object.values(object);
    
    // Find the index of the target value
    const index = values.indexOf(value);
    
    // If the value is found
    if (index !== -1) {
        // Get array of object keys
        const keys = Object.keys(object);
        // Return the key at the same index
        return keys[index];
    }
    // If value is not found, return null or handle accordingly
    return null;
}
