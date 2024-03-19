import { convidados } from './nomes.js'

//const convidados = require("./nomes.json");

const bigParam = "na80d23udnqwjusa90uqadjajonsssdo12093ikadad0139iejsd9i3i21ejasdjq80wj8d0ajmnd0mdaisjd9asuyd987auys7yas7dyans7dyasd7ajsdajhs467fjhwyehw7yeh87he8f7hw7ehhf7hudjijkemiwmfiwmdifsdv89su87whfuidsnmjvc8ujew9fruwsud9fjvsu9jngf9uhsjf87whfujsduvjms9jvfs98jhudfu97hjdsfsdfgh3rdfgdfhfgvbbcnhty3444542345efggj7y7605r123e89jhdw9jhd89ahsduhd91732hye809qwhd8a9hd982133jhyd89qejhf98wehrf89qwhyjjr9wh";
const urlParams = new URLSearchParams(window.location.search);
urlParams.set(bigParam, convidados[Math.floor(Math.random()*convidados.length)]);
window.location.search = urlParams;

const nome = urlParams.get(bigParam);

if(convidados.includes(nome)){
    document.querySelector('.aceito').classList.toggle("hide");
    document.querySelector('.recusado').classList.toggle("hide");
}



// DECLARAÇÃO DE VARIÁVEIS
//const botaoOrdemHTML = document.querySelector('button.ordemMatriz');
//const selectOrdemHTML = document.querySelector('select.ordemMatriz');

// PARTE 1 - FUNÇÔES INICIAIS, EVENTOS E SELETORES PARA RETIRAR DADOS DO HTML
