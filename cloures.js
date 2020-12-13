// function x() {
//     let a = 8;
//     return function y(){
//         console.log(a);
//     }
// }

// let z = x();
// console.log(z);
// z();

function x(){
    var a = 30;
    for(var i =1; i<=5; i++)
    setTimeout(function(){
        console.log(i);
    },i*1000);
}
x();