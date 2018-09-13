/**
 * 使用任何其他数组和/或值创建一个新数组连接数组。
 * 原生的concat方法只能连接数组于数组
 * 例子如下
 */

var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
 
// console.log(other);
// => [1, 2, 3, [4]]
 
// console.log(array);
// => [1]


// 老规矩，自己先实现一个
// 思路就是用rest参数之后放到空数组中,然后判断是不是数组再用原生concat方法连接

function _concat(...arg){
	let res = [];
	let index = 0;
	let len = arg.length;
	for(const val of arg){
		let a = Array.isArray(val) ? val : Array.of(val)
		res = res.concat(a)
	}
	return res
}
// log(_concat(array, 2, [3], [[4]]))


function __concat() {
  var length = arguments.length;
  if (!length) {
    return [];
  }
  var args = Array(length - 1),
      array = arguments[0],
      index = length;

  while (index--) {
    args[index - 1] = arguments[index];
  }
  return arrayPush(Array.isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
}