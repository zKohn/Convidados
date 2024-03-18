import { convidados } from './nomes.js'

//const convidados = require("./nomes.json");

const thisURL = new URL(document.URL)
const thisURL2 = new URLSearchParams(thisURL.search);
console.log(thisURL);


// DECLARAÇÃO DE VARIÁVEIS
//const botaoOrdemHTML = document.querySelector('button.ordemMatriz');
//const selectOrdemHTML = document.querySelector('select.ordemMatriz');

// PARTE 1 - FUNÇÔES INICIAIS, EVENTOS E SELETORES PARA RETIRAR DADOS DO HTML
