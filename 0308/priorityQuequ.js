
// 按照队列传递参数


class priorityQueue{
	constructor(){
		this.arr=[];
		this.index = 0;
		this.str = '';
	}
	enqueue(str,index){
		if(!this.arr.length){
			this.arr.push(str);
		}
		else if(index>=this.arr.length){
			this.arr.push(str)		
		}
		else this.arr.splice(index-1,0,str)
	}
	print(){
		console.log(this.arr)
	}
}

let test = new priorityQueue()


test.enqueue('abc',2);
test.enqueue('edf',1);
test.enqueue('aasde',1);
test.enqueue('ab32',3);

test.print()
