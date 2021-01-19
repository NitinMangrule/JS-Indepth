function reverseString(str){
  let result = [];
  let arr = str.split('');
  for(let i = arr.length -1; i>=0; i--){
    result.push(arr[i]);
  }
  return result.join('');
}

reverseString('asdfghjkl');






function titleCaseString(string){
  let words = string.split(' ');
  let stack = [];
  for(let str of words){
    stack.push(uppercaseFirst(str));
    
    }
    return stack;
}
//titleCaseString('ss da .dd .ad  ddd dfd f');








function uppercaseFirst(word){

    let first = word.charCodeAt(0);
    let remaining = word.slice(0);
    let cap = String.fromCharCode(first -32);
    return cap + remaining;
}

// uppercaseFirst('dadadd');

