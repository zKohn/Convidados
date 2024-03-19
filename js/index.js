import { convidados } from './nomes.js'

window.addEventListener("load", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const bigParam = "name";
    const nome = urlParams.get(bigParam);
    console.log(nome);
    if(convidados.includes(nome)){
        document.querySelector('.aceito').classList.toggle("hide");
        document.querySelector('.recusado').classList.toggle("hide");
    }
})