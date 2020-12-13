let name = {
    firstName: "Nitin",
    lastName: "Mangrule",
}

let printFullName = function(homeTown, state){
    console.log(this.firstName + " " + this.lastName + " from " + homeTown + " " + state);
}

printFullName.call(name, 'Pune', 'MH');

let name2 = {
    firstName: "Sa",
    lastName: "Pa"
}

// function borrowing.
printFullName.call(name2, 'Barshi', 'MH');
printFullName.apply(name2, ['Barshi']);
printFullName.apply(name2, ['Barshi', 'MH']);

let test = printFullName.bind(name2, 'Barshi', 'MH');
test();
console.log(test);