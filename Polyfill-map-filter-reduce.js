// Polyfil for filter
Array.prototype.myFilter = function(callback){
    const data = [];
    for(let i = 0; i < this.length; i++ ){
        if(callback(this[i])){
            data.push(this[i]); 
        }
    }
    return data;
}

let test = [1,2,4,5,7,8,5,7,10];
const even = (item) => item % 2 === 0;
test.myFilter(even);

// Polyfil for map
Array.prototype.myMap = function(callback) {
    const data = [];
    for (let i = 0; i < this.length; i++){
        data.push(callback(this[i]));
    }
    return data;
}
const makeDouble = item => item * 2;
test.myMap(makeDouble);


// Polyfil for Reduce
Array.prototype.myReduce = function(callback, initial) {

    for(let i =0; i< this.length; i++){
        initial = initial ? callback( initial, this[i]) : this[i];
    };
    return initial;
}

function sumofArray(total, num) {
    return total + num;
}

test.myReduce(sumofArray,10);
