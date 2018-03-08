function tentotwo(num){
	let arr = []
	let newnum = ''


	while(num>0){
		let yushu = num%2;
		arr.push(yushu);
		num = Math.floor(num/2)
	}
	while(arr.length){
		newnum += arr.pop().toString()
	}
	return newnum
}



console.log(tentotwo(12123213))