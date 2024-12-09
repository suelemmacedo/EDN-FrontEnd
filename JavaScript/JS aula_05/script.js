//DOM - DOCUMENT OBJECT MODEL

let h1 = document.querySelector('#titulo');
let p = document.querySelectorAll('.paragrafo');
let body = document.querySelector('body');
h1.innerHTML = "Estou usando DOM";
h1.classList.add("abobora");
h1.classList.remove("abobora");

for (let i = 0; i < p.length; i++) {
    p[i].style.color = 'blue';
}


function pintar() {
    for (let i = 0; i < p.length; i++) {
        p[i].style.color = 'blue';
    }
}

pintar();

function darkMode() {
    body.classList.toggle('dark-mode');
}