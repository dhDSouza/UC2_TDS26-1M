const rl = require('readline-sync')

// Solicite, Peça, Informe (readline-sync é pra usar o question)
// Verifique (if/else, else if)

let lado1 = rl.questionInt('Digite o primeiro lado do triangulo: ')
let lado2 = rl.questionInt('Digite o segundo lado do triangulo: ')
let lado3 = rl.questionInt('Digite o terceiro lado do triangulo: ')

if (lado1 === lado2 && lado2 === lado3) {
    console.log('É um Triângulo Equilátero')
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log('É um Triângulo Isóceles')
} else {
    console.log('É um Triângulo Escaleno')
}