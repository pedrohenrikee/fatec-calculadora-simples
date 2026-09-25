'use strict'
const botaoAdicao = document.getElementById('adicao')

function somar() {
    const num1 = Number (document.getElementById('numero1').value)
    const num2 = Number (document.getElementById('numero2').value)
    const resultado = document.getElementById('resultado')

    resultado.textContent = num1 + num2
}

botaoAdicao.onclick = somar

const botaoSubtracao = document.getElementById('subtracao')

function subtrair() {
    const num1 = Number (document.getElementById('numero1').value)
    const num2 = Number (document.getElementById('numero2').value)
    const resultado = document.getElementById('resultado')

    resultado.textContent = num1 - num2
}

botaoSubtracao.onclick = subtrair

const botaoMultiplicacao = document.getElementById('multiplicacao')

function multiplicar() {
    const num1 = Number (document.getElementById('numero1').value)
    const num2 = Number (document.getElementById('numero2').value)
    const resultado = document.getElementById('resultado')

    resultado.textContent = num1 * num2
}

botaoMultiplicacao.onclick = multiplicar


const botaoDivisao = document.getElementById('divisao')    

function dividir() {
    const num1 = Number (document.getElementById('numero1').value)
    const num2 = Number (document.getElementById('numero2').value)
    const resultado = document.getElementById('resultado')

    resultado.textContent = num1 / num2
}

botaoDivisao.onclick = dividir
