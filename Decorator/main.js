
// const getMessage = () => "Hello World";
// document.getElementById('output').innerHTML = getMessage();
// @testable
// class MyTestableClass {
// }
 
// function testable(target) {
//   target.isTestable = true;
// }

// MyTestableClass.isTestable // true
@testable
class MyTestableClass {
  // ...
}
function testable(target) {
  target.isTestable = true;
}
MyTestableClass.isTestable // true
console.log('index.js')