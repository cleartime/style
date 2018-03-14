function SetArr(){
	let arr =[];

	this.add = function(val){
		arr.push(val)
	}
	this.delete= function(val){
		let index = arr.indexOf(val);
		arr.splice(index,1)
	}
	this.has= function(val){
		return arr.indexOf(val)
	}
	this.clear= function(){
		arr = []
	}
	this.size= function(){
		return arr.length
	}
	this.values= function(){
		return arr;
	}
}

function SetObj(){
	let obj ={};

	this.add= function(val){
		if(!this.has(val)){
			obj[val] =val
			return true
		}
		return false
	}
	this.remove= function(val){
		if(!this.has(val)){
			delete obj[val]
			return true
		}
		return false
	}
	this.has= function(val){
		return obj.hasOwnProperty(val)
	}
	this.clear= function(){
		arr = []
	}
	this.size= function(){
		return Object.keys(obj).length
	}
	this.values= function(){
		return Object.values(obj);
	}
	this.print= function(){
		console.log(obj)
	}

	//形如setA.union(setB)
	//这样的话就需要把B的元素合并到A上面
	this.union = function(otherSet){
		let newSet = new Set();
		let A = this.values();
		let B = otherSet.values();

		for(let i=0,len=A.legnth;i<len;i++){
			newSet.add(A[i])
		}

		for(let i=0,len=B.legnth;i<len;i++){
			newSet.add(B[i])
		}

		return newSet;
	}
}


let setA = new SetObj();

setA.add(1);
setA.add(2);
setA.add(3);


let setB = new SetObj();

setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);

let newset = setA.union(setB);


console.log(newset.values())


// let setObj = new SetObj()

// setObj.add(1)
// setObj.print()
