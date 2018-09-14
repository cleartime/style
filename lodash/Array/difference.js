/**
 * 使用SameValueZero创建一个未包含在其他给定数组中的数组值数组，以进行相等比较。结果值的顺序和引用由第一个数组确定。
 * 例子如下
 */

_.difference([2, 1], [2, 3]);
// => [1]


// 老规矩，自己先实现一个
// 思路就是用rest参数之后放到空数组中,然后判断是不是数组再用原生concat方法连接

function _difference(){
  let res = [];
  
}
// log(_concat(array, 2, [3], [[4]]))