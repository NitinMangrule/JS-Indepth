let name = {
    firstName: "Nitin",
    lastName: "Mangrule",
}

let printName = function (city, state, country) {
    console.log(this.firstName + " " + this.lastName + " " +city+ " " +state+ " " +country);
}

let printMyName = printName.bind(name);
printMyName('a', 'v', 'i');

Function.prototype.myBind = function(...args) {
    let obj = this;
    params = args.slice(1);
    return function (...args2) {
        obj.apply(args[0],[...params, ...args2]);
    }
}


let printMyName2 = printName.myBind(name, '1','1');
printMyName2('2');