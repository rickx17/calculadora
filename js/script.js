let display = document.getElementById('display');
let operacao = '';
let pontoAdicionado = false;

function adicionarNumero(numero) {
    operacao += numero;
    display.value = operacao;
}

function adicionarOperacao(op) {
    if (/[\+\-\*\/%]$/.test(operacao)) {
        alert("Operação inválida.");
        return;
    }
    operacao += op;
    pontoAdicionado = false;
    display.value = operacao;
}

function adicionarPonto() {
    if (!pontoAdicionado) {
        operacao += '.';
        pontoAdicionado = true;
        display.value = operacao;
    }
}

function limpar() {
operacao = '';
display.value = operacao;
pontoAdicionado = false;
}

function apagar() {
if (operacao.slice(-1) === '.') pontoAdicionado = false;
operacao = operacao.slice(0, -1);
display.value = operacao;
}

function calcular() {
    if (/[\+\-\*\/%]$/.test(operacao)) {
        alert("Operação inválida.");
        return;
    }

    try {
    operacao = operacao.replace(/%/g, '/100*');
    let resultado = eval(operacao);
    if (!isFinite(resultado)) throw new Error("Resultado infinito");
    operacao = resultado.toString();
    display.value = operacao;
    } catch (e) {
        alert("Erro na expressão.");
        limpar();
    }
}

