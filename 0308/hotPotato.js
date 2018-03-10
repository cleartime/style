function hotPotato(arr=[],num=0){
	let len = arr.length;
	let i=0;
	while(!arr.legnth){
		if(num<arr.length){
			arr.splice(num-1,1,arr[num-1])
		}else{
			num = num-arr.length
			arr.splice(num-1,1,arr[num-1])
		}
	}
}

let name=['john','jack','camila','ingrid','car1'];
let winner = hotPotato(name,7);
console.log('the winner is:'+winner);