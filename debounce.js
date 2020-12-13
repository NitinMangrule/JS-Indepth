let counter = 0;
const getData = () => {
    console.log("Fetching data", counter++, args[0]);
}

const debounceFunc = function (fn, delay) {
    let timer;
    return function () {
        let context = this;
        args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    }
}

const betterFunction = debounceFunc(getData, 300);