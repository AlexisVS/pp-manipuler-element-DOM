let body = document.body;
let ul = body.querySelector('ul')
let bonjour = document.createElement('h1').innerHTML = "ELELELELLEEMNT";
let cec = document.createElement('p')
cec.innerHTML = ul.childElementCount
console.log(cec.innerHTML);
ul.insertAdjacentHTML("afterend", bonjour);
