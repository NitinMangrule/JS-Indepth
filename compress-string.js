/* 

WAP a function compress such that it compresses strings like such
compress('a') // 'a'
compress('aa') // 'a2'
compress('aaa') // 'a3'
compress('aaab') // 'a3b'
compress('aaabb') // 'a3b2'
compress('aaabba') // 'a3b2a'
*/

const compress = (input) => {
	let result = '';
	// const arrayInput = input.split('');
  let count = 1;
  for(let i = 0; i < input.length; i++){
  	if(input[i] !== input[i+1]){

       result = result + input[i];
       if( count > 1){
	 result =  result + count;
  
  }
     
       count = 1;
    }else {
    		count++;
    }
  }
	return result;
}

console.log(compress('abc'));


console.log(compress('aabbcc'));
console.log(compress('aaabbcccbfffc'));
