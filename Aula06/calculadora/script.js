let display = document.getElementById("display-screen");/* pegando o elemento do display pelo id */

let esquerda;
let direita;
let posicaoDaOperacao;
let calculoFinal;
let operacoes = {
    soma: false,
    multiplicacao: false,
    divisao: false,
    subtracao: false,
    potencia: false,
    raiz: false
}

function digitarUm() {
    limparVisor()
    display.value += 1;
}

function digitarDois() {
    limparVisor()
    display.value += 2;
}

function digitarTres() {
    limparVisor()
    display.value += 3;
}

function digitarQuatro() {
    limparVisor()
    display.value += 4;
}

function digitarCinco() {
    limparVisor()
    display.value += 5;
}

function digitarSeis() {
    limparVisor()
    display.value += 6;
}

function digitarSete() {
    limparVisor()
    display.value += 7;
}

function digitarOito() {
    limparVisor()
    display.value += 8;
}

function digitarNove() {
    limparVisor()
    display.value += 9;
}
function digitarZero() {
    limparVisor()
    display.value += 0;
}

function apagar() {
    if(display.value != 0) {
        display.value = display.value.slice(0, display.value.length - 1);
    }
}

function apagarTudo() {
    display.value = 0;
    esquerda = 0;
    direita = 0;
    posicaoDaOperacao = 0;
    calculoFinal = 0;
    operacoes.soma = false;
    operacoes.subtracao = false;
    operacoes.multiplicacao = false;
    operacoes.divisao = false;
}

function limparVisor(){
    if(display.value == 0) {
        display.value = "";
    }
}

/* Operações */

function digitarDivisao () {
    limparVisor();
    display.value = display.value + '÷'
    operacoes.divisao = true;
}

function digitarMultiplicacao () {
    limparVisor();
    display.value = display.value + 'x'
    operacoes.multiplicacao = true;
}

function digitarSubtracao () {
    limparVisor();
    display.value = display.value + '-'
    operacoes.subtracao = true;
}

function digitarSoma () {
    limparVisor();
    display.value = display.value + '+'
    operacoes.soma = true;
}

function calcular(operacao) {
    posicaoDaOperacao = display.value.indexOf(operacao);
    esquerda = parseInt(display.value.substring(0, posicaoDaOperacao));
    direita = parseInt(display.value.substring(posicaoDaOperacao + 1, display.value.length));

    if(operacao == '+') {
    calculoFinal = esquerda + direita;
    display.value = calculoFinal;
    }

    else if(operacao == '-') {
    calculoFinal = esquerda - direita;
    display.value = calculoFinal;
    }

   else if(operacao == 'x') {
    calculoFinal = esquerda * direita;
    display.value = calculoFinal;
    }
    else if (operacao == '÷') {
    calculoFinal = esquerda / direita;
    display.value = calculoFinal;
    }
}

function fazerCalculo() {
    if(operacoes.soma) {
    calcular('+'); 
    }   
    else if (operacoes.subtracao) {
        calcular('-');
    }

    else if (operacoes.multiplicacao) {
        calcular('x');
    }

    else if (operacoes.divisao) {
        calcular('÷');
    }
    
}