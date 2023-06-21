let user = {
  name: 'John',
  surname: 'Smith'
};

let response = await fetch('url',{
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
        'Content-type': 'application/json;charset=utf-8'
    }
});

let result = await response.json();



Promise.race(
    new Promise((resole,reject)=> setTimeout(()=> resolve('1'), 2000),
    new Promise((resole,reject)=> setTimeout(()=> resolve('2'), 3000),
    new Promise((resole,reject)=> setTimeout(()=> resolve('3'), 1000)
).then(alert);




function fetchJoke() {
    return new Promise((resolve,reject)=> {
        fetch('https://official-joke-api.appspot.com/random_joke').then(resp =>  {
            if(resp.ok){
                return resp.json();
            } else {
                throw new Error('failed..');
            }
        }).then(data=>{
            resolve(data);
        }).catch(error=> {
        reject(error);
        });
        
    });
}
fetchJoke().then(data=> console.log(data)).catch(error=> console.error(error));
