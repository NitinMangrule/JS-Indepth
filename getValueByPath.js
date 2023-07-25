/* 

"let obj = { 
                 a : { 
                          b : {
                                  c : { 
                                           d : 'e' } 
                                        } 
                              } 
                    }
let path = ""a.b.c"" ====>{d: e} 
""a.b.f.t"" ====> null 
""a"" ======> {b: {c: {d: e}}}

For given inputs obj, path
write a function to traverse given path in object tree and return the reached value or null if not found 
*/

const getValueByPath = (obj, path) => {
		let result = obj;
		const inputPathArray = path.split('.');

 		for(const key of inputPathArray){
    	if(typeof result === 'object' && key in  result){
      		result = result[key];
      }else {
      	return null;
      }
    
    }
 		
		return result;
}

console.log(getValueByPath({a: {f: {g: {h: {j: {y: 123}}}}, b: 222}}, 'a.f.g.h.j.y'));
