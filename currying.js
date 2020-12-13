// let multiply = function(x, y) {
//     console.log(x*y);
// }
// currying by bind method.
// let multiplyByTwo = multiply.bind(this, 2, 4);

// let multiplyByThree = multiply.bind(this, 3);

// multiplyByTwo(3);
// multiplyByThree(3);

// currying by clourses

let multiply =  function(x){
    return function(y){
        console.log( x*y);
    }
}

let multiplyByTwo = multiply(2);
multiplyByTwo(6);

let multiplyByThree = multiply(3);
multiplyByThree(3);
