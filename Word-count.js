var a = "dnaoud dnajd12 rje 222n ei adn( .dma 0";
function check(str){
  let splitedArr = str.split(' ');
  let reg = /^[A-Za-z-]/;
   let stack = [];
  
  for(let i of splitedArr){
    i = i.replace(',','');
    i = i.replace('?','');
    i = i.replace('!','');
   console.log(i);
    if(i.match(reg)){
        stack.push(i)
    }
  }
  return stack;
}
check('s! da-sd? dd .9c 9 0ds 0sd ')
