const rl = require('readline-sync')

let valorCompra = rl.questionFloat('Digite o valor da sua compra: R$ ')

let valorTotal = valorCompra
let desconto = 0

if (valorCompra <= 100) {
    console.log('Você não recebeu nenhum desconto!')
} else if (valorCompra <= 300) {
    console.log('Você ganhou 5% de desconto!')
    desconto = valorCompra * (5 / 100)
    valorTotal = valorCompra - desconto
} else if (valorCompra <= 500) {
    console.log('Você ganhou 10% de desconto!')
    desconto = valorCompra * (10 / 100)
    valorTotal = valorCompra - desconto    
} else {
    console.log('Você ganhou 15% de desconto!')
    desconto = valorCompra * (15 / 100)
    valorTotal = valorCompra - desconto
}
console.log(`O valor da compra ficou: R$ ${valorTotal}!`)