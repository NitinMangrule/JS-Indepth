
const displayCount = () => {
    console.log('button clicked..');
}

const trottling = (fn, limit) => {

    let flag = true;
    return function () {
        let context = this,
        args = arguments;
        if(flag) {
            fn.apply(context, args);
            flag = false;
        }
        setTimeout(() => {
            flag = true;
        }, limit)
    }

}

const mainFunc = trottling(displayCount, 3000)



let sum = function (a) {
    return function(b) {
        if(b){

            return sum(a+b)
        }
        return a
    }
}

console.log(sum(1)(2)(3)());