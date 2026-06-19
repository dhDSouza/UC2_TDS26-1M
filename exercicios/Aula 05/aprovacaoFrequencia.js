const rl = require('readline-sync')

let nota = rl.questionFloat('Digite a sua nota final: ')
let frequencia = rl.questionInt('Quantos % ficou a sua frequencia: ')

if (frequencia >= 75) {
    if (nota >= 7) {
        console.log('Aprovado')
    } else if (nota >= 5) {
        console.log('Em recuperação')
    } else {
        console.log('Reprovado')
    }
} else {
    console.log('Reprovado por frequência')
}