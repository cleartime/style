/**
 * 创建一个数组切片，其中n个元素从头开始删除。
 * 例子如下
 */

_.drop([1, 2, 3]);
// => [2, 3]
 
_.drop([1, 2, 3], 2);
// => [3]
 
_.drop([1, 2, 3], 5);
// => []
 
_.drop([1, 2, 3], 0);
// => [1, 2, 3]


// 老规矩，自己先实现一个
// 思路就是用slice方法去根据第二个参数来切割

function _drop(arr, size) {
  size = !size ? 1 : size;
  size = size > arr.length ? arr.length : size;
  let res = [];
  return res = arr.slice(size, arr.length);
}
// log(_drop([1, 2, 3]))


// 看源码
function drop(array, n=1) {
  // 获取长度
  const length = array == null ? 0 : array.length
  // 没有长度返回空数组
  return length
    ? slice(array, n < 0 ? 0 : n, length) // 此slice传入三个参数(数组，切割的起始点，切割的长度)
    : []
}


/**
 * 总结
 * 1. 获取长度要判断null值
 * 2. 返回数组的时候要懒得length，没有的话要返回空数组
 */



