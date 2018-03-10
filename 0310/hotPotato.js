function hotPotato(arr=[],num=0){
	while(arr.length>1){
		arr.splice(num-1,1)
		console.log(arr[num-1]+'被淘汰了')
	}
	return arr
}

let name = ['a','b','c','d','e'];
let num = 2;
console.log(hotPotato(name,num));