import { convidados } from './nomes.js'

window.addEventListener("load", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const bigParam = "arewweqeasdqwefsfdc2ah790feqcnh8oFBg4L0do1D02O24C3u9rmx23iww13321ws23jmUHJxro3nh790feqcnh8oFBDFsd86asdgggevvadwf";
    const nome = urlParams.get(bigParam);
    console.log(nome);
    if(convidados.includes(nome)){
        document.querySelector('.aceito').classList.toggle("hide");
        document.querySelector('.recusado').classList.toggle("hide");
        document.querySelector('.nome').innerHTML = nome.toUpperCase();
    }
})