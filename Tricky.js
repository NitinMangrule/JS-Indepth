

// for(var i = 0; i<5; i++){
//   (function(i){setTimeout(function(){
//   		console.log(i);
//   }, 100)})(i);
// }
// Output: 0,1,2,3,4

// for(let i = 0; i<5; i++){
//     setTimeout(function(){
//       		console.log(i);
//       }, 100);
// }
// Output: 0,1,2,3,4

// for(let i = 0; i < 5; i++){
//     setTimeout(() => {
//       		console.log(i);
//       }, 100);
// }
// Output: 0,1,2,3,4

// for(let obj = { i:0}; obj.i < 5; obj.i++){
//     setTimeout(() => {
//       		console.log(obj.i);
//       }, 100);

// }
// Output: 5,5,5,5,5

// for(let obj = { i: 0}; obj.i < 5; obj.i++){
//     let innerObj = obj;
//     setTimeout(() => {
//       		console.log(innerObj.i);
//       }, 100);
// }
// Output: 5,5,5,5,5

// for (let obj = { i: 0 }; obj.i < 5; obj.i++) {
//   let innerObj = { i : obj.i};
//     setTimeout(() => {
//       console.log(innerObj.i);
//     }, 100);
// }
// Output: 0,1,2,3,4


// const obj = {
//   name: 'John',
//   greet: function() {
//     setTimeout(function() {
//       console.log('Hello, ' + this.name);
//     }, 100);
//   }
// };

// obj.greet(); // Outputs: "Hello, undefined"


// const obj2 = {
//   name: 'Jane',
//   greet: function() {
//     setTimeout(() => {
//       // 'this' refers to the 'obj2' object
//       console.log('Hello, ' + this.name);
//     }, 100);
//   }
// };

// obj2.greet(); // Outputs: "Hello, Jane"


const obj = {
  name: 'John',
  greet: function() {
    setTimeout(function() {
      console.log('Hello, ' + this.name);
    }.bind(this), 100);
  }
};

obj.greet(); // Outputs: "Hello, John"
