const rl = require('readline-sync')

let peso = rl.questionFloat('Digite o seu peso [kg]: ')
let altura = rl.questionFloat('Digite a sua altura [m]: ')

let imc = peso / (altura * altura)

if (imc < 18.5) {
    console.log(`Seu IMC é ${imc.toFixed(2)}.\n Abaixo do peso`)
} else if (imc <= 24.9) {
    console.log(`Seu IMC é ${imc.toFixed(2)}.\n Peso normal`)
} else if (imc <= 29.9) {
    console.log(`Seu IMC é ${imc.toFixed(2)}.\n Sobrepeso`)
} else {
    console.log(`Seu IMC é ${imc.toFixed(2)}.\n Obesidade`)
}