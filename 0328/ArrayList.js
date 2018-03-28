// 这个数组是来表示后面最重要的排序和搜索的数据结构
function ArrayList(){
	let arr = [];
	// 插入方法
	this.inset = function(item){
		arr.push(item)
	}
	// 输出字符串
	this.toString = function(){
		return arr.join()
	}
	// 冒泡排序
	// 其实就是第一个和第二个对比，然后再和第三个对比，谁小就不动，谁大就往后排
	this.bubbleSort = function(){
		let len = arr.length;
		// 这个外层循环表示总共有多少轮，
		for(let i = 0; i < len; i++){
			// 这个循环表示第一个和第二个对吧，直到倒数第二个和倒数第一个对比，因为下面arr(j+1)加一了，所以循环的时候到倒数第二个就好了
			for(let j = 0; j < len-1; j++){
				// 这个时候判断前一个和后面一个做对比，如果比他大就交换往后排
				if(arr[j] > arr[j+1]){
					[arr[j],arr[j+1]] = [arr[j+1], arr[j]];
					console.log('交换的顺序为:'+arr)
				}
			}
		}
	}
	// 改进版的冒泡排序
	this.modifiedBubbleSort = function(){
		let len = arr.length;
		for(let i = 0; i < len; i++){
			// 这个地方len-1-i，这个i表示外层已经循环过的，这样就能去除已经循环过的再循环一遍，减少循环次数
			// 因为到了外层最后一轮的时候，其实只要对比一次就行了，就是倒数第二和最后一个对比，所以只要循环一次就好了
			for(let j = 0; j < len-1-i; j++){
				if(arr[j] > arr[j+1]){
					[arr[j],arr[j+1]] = [arr[j+1], arr[j]];
					console.log('交换的顺序为:'+arr)
				}
			}
		}
	}


	// 选择排序
	// 循环的时候每次只找最小的放到最前面
	this.selectionSort = function(){
		let len = arr.length;
		let min = '';
		// 外层循环到倒数第二层，因为内层会循环到最后一层
		for(let i = 0; i < len-1; i++){
			// 默认第一层就有最小值，其实就是第一个值
			min = i;
			// 内层从当前层循环到最后一层
			for(let j = i; j < len; j++){
				// 判断当前循环有没有比上一层小的，如果有的判断这个是这层最小的
				if(arr[j] < arr[min]){
					min = j
				}	
			}
			// 判断是不是当前层,也就是判断当前循环的时候最小值有没有改变,没有就不交换
			if(min !== i){
				[arr[i],arr[min]] = [arr[min], arr[i]];
				console.log('交换的顺序为:'+arr)
			}
		}
	}


	// 归并排序
	// 就是把一个大的数组切分成一个个的小数组，然后进行对比，之后进行排序合并
	this.mergeSortRec = function(array){
		let len = arr.length;
		// 这个是判断切割到一个了就不切了
		if(len === 1){
			return array
		}
		// 首先取中间的一切为二
		let mid = Math.floor(length/2);
		let left = array.slice(0, mid);
		let right = array.slice(mid, length);
		// 递归调用判断合并数组
		return merge(mergeSortRec(left), mergeSortRec(right));
	}
	let merge = function(left, right){
		let res = [];		// 返回的结果
		let indexLeft = 0;	// 左边循环的当前index值
		let indexRight = 0; // 右边循环的当前index值
		// 首先判定边界 左边的index不能加到左边的数组最大值，右边同理
		while(indexLeft < left.length && indexRight > right.length){
			// 如果左边的当前index的值小于右边的，把左边的放到结果数组中，否则右边放进去
			if(left[indexLeft] < right[indexRight]){
				res.push(left[indexLeft]);
				indexLeft++
			}else{
				res.push(right[indexRight]);
				indexRight++
			}
		}
		// 把剩下的没有插入到res数组内再判断一遍，最后再合并起来
		while(indexLeft < left.length){
			res.push(left[indexLeft])
			indexLeft++
		}
		while(indexRight < right.length){
			res.push(right[indexRight])
			indexRight++
		}
		return res
	}
}