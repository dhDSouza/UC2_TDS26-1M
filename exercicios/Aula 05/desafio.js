const rl = require('readline-sync')

let computador = Math.floor(Math.random() * 3);

let escolha = rl.questionInt('Escolha uma opcao:\n[0] - Pedra\n[1] - Papel\n[2] - Tesoura\n: ')

// 0 é Pedra
// 1 é Papel
// 2 é Tesoura


if (escolha >= 0 && escolha <= 2) {

    if ((escolha == 0 && computador == 2) || 
        (escolha == 1 && computador == 0) ||
        (escolha == 2 && computador == 1)) {
            console.log('Venceu!')        
        } else if (escolha === computador) {
            console.log('Empate!')
        } else {
            console.log('Perdeu!')
        }
} else {
    console.log('Opção Inválida!')
}