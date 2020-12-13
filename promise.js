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
