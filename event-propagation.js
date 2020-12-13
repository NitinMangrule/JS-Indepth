document.querySelector("#grandparent")
.addEventListener('click', ()=> {
    console.log("granparent clicked..");
}, false);

document.querySelector("#parent")
.addEventListener('click', (e)=> {
    e.stopImmediatePropagation();
    console.log("parent clicked..");
}, false);

document.querySelector("#child")
.addEventListener('click', ()=> {
    console.log("child clicked..");
}, false);