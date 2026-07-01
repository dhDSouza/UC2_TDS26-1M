# 🚀 Aula 7 — Arrays e Estruturas de Repetição (`for` e `while`)

## 🎯 Objetivos da Aula

Ao final da aula deverão ser capazes de:

* Compreender o conceito de vetor (array);
* Declarar e manipular arrays em JavaScript;
* Percorrer arrays utilizando estruturas de repetição;
* Utilizar corretamente os laços `for` e `while`;
* Resolver problemas utilizando repetição de tarefas.

---

# 🧠 Revisando a Aula Anterior

Na última aula aprendemos:

✅ Estrutura `switch`

✅ `case`

✅ `break`

✅ `default`

✅ Menus de opções

Até agora nossos programas executavam cada comando apenas **uma vez**.

Mas imagine algumas situações:

* Mostrar 100 números.
* Ler as notas de 30 alunos.
* Calcular a média de uma turma.
* Exibir todos os produtos cadastrados.

Seria inviável escrever o mesmo código várias vezes.

Para isso existem as **estruturas de repetição**.

---

# 🤔 O Que é um Laço de Repetição?

Um laço de repetição (loop) executa um bloco de código diversas vezes.

Imagine o seguinte:

```txt
Enquanto houver alunos na fila

    Atender aluno

Fim
```

Ou:

```txt
Repita 10 vezes

    Escreva "Olá Mundo!"

Fim
```

Essa é exatamente a ideia do `for` e do `while`.

---

# 🔁 Estrutura `for`

O `for` é utilizado quando sabemos antecipadamente quantas vezes desejamos repetir uma ação.

---

# 📌 Sintaxe

```js
for (início; condição; incremento) {

    // código

}
```

---

## Entendendo cada parte

```js
for (let i = 1; i <= 5; i++) {

    console.log(i);

}
```

Temos três partes:

```txt
let i = 1
```

Inicializa a variável.

Depois:

```txt
i <= 5
```

Enquanto essa condição for verdadeira, o laço continua.

Por último:

```txt
i++
```

Incrementa o valor da variável.

---

# 📊 Fluxograma

```txt
Inicialização
      │
      ▼
 Verifica condição
      │
 ┌────┴─────┐
 │          │
Sim        Não
 │          │
 ▼          ▼
Executa    Fim
 │
 ▼
Incrementa
 │
 └───────────────►
```

---

# 📌 Exemplo

```js
for (let i = 1; i <= 10; i++) {

    console.log(i);

}
```

Saída

```txt
1
2
3
4
5
6
7
8
9
10
```

---

# 🔽 Contagem Regressiva

```js
for (let i = 10; i >= 1; i--) {

    console.log(i);

}
```

Resultado

```txt
10
9
8
7
6
5
4
3
2
1
```

---

# ➕ Somando Valores

```js
let soma = 0;

for (let i = 1; i <= 5; i++) {

    soma += i;

}

console.log(soma);
```

Resultado

```txt
15
```

---

# 🔄 Estrutura `while`

O `while` é utilizado quando **não sabemos exatamente quantas vezes** a repetição ocorrerá.

Ele executa enquanto uma condição for verdadeira.

---

# 📌 Sintaxe

```js
while (condicao) {

    // código

}
```

---

# 📌 Exemplo

```js
let contador = 1;

while (contador <= 5) {

    console.log(contador);

    contador++;

}
```

Resultado

```txt
1
2
3
4
5
```

---

# ⚠️ Cuidado com Loop Infinito

Observe:

```js
let contador = 1;

while (contador <= 5) {

    console.log(contador);

}
```

O contador nunca aumenta.

Resultado:

```txt
1
1
1
1
1
...
```

O programa nunca termina.

Sempre atualize a variável da condição.

---

# 🤔 Quando usar `for` ou `while`?

Use **for** quando:

* sabemos a quantidade de repetições;
* percorremos listas;
* contamos números.

Exemplo:

```txt
Mostrar os 20 primeiros números.
```

---

Use **while** quando:

* depende da escolha do usuário;
* não sabemos quantas vezes repetirá;
* esperamos uma condição acontecer.

Exemplo:

```txt
Enquanto a senha estiver incorreta.
```

---

# 📦 O Que é um Array?

Até agora nossas variáveis armazenavam apenas **um valor**.

```js
let nome = "Daniel";
```

Mas e se quisermos armazenar vários nomes?

Para isso usamos um **array**.

---

## Exemplo

```js
let nomes = [
    "Ana",
    "Carlos",
    "João",
    "Maria"
];
```

Agora uma única variável guarda vários valores.

---

# 📌 Índices

Cada posição possui um número.

```txt
Índice

0 → Ana
1 → Carlos
2 → João
3 → Maria
```

O primeiro elemento sempre é o índice **0**.

---

# 📌 Acessando Elementos

```js
let frutas = [
    "Maçã",
    "Banana",
    "Laranja"
];

console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
```

Resultado

```txt
Maçã
Banana
Laranja
```

---

# 📌 Alterando Valores

```js
let frutas = [
    "Maçã",
    "Banana"
];

frutas[1] = "Uva";

console.log(frutas);
```

Resultado

```txt
["Maçã", "Uva"]
```

---

# 📌 Adicionando Novos Valores

```js
let frutas = [
    "Maçã",
    "Banana"
];

frutas.push("Laranja");

console.log(frutas);
```

Resultado

```txt
["Maçã", "Banana", "Laranja"]
```

---

# 📌 Quantidade de Elementos

```js
let numeros = [10, 20, 30, 40];

console.log(numeros.length);
```

Resultado

```txt
4
```

---

# 🔄 Percorrendo um Array com `for`

```js
let frutas = [
    "Maçã",
    "Banana",
    "Laranja",
    "Uva"
];

for (let i = 0; i < frutas.length; i++) {

    console.log(frutas[i]);

}
```

Resultado

```txt
Maçã
Banana
Laranja
Uva
```

---

# 🔄 Percorrendo um Array com `while`

```js
let frutas = [
    "Maçã",
    "Banana",
    "Laranja"
];

let i = 0;

while (i < frutas.length) {

    console.log(frutas[i]);

    i++;

}
```

---

# 🎮 Exemplo Prático

## Cadastro de 5 Nomes

```js
const rl = require("readline-sync");

let nomes = [];

for (let i = 0; i < 5; i++) {

    nomes.push(
        rl.question("Nome: ")
    );

}

console.log();

console.log("Lista de nomes:");

for (let i = 0; i < nomes.length; i++) {

    console.log(nomes[i]);

}
```

---

# 🎮 Exemplo Completo

## Média de Notas

```js
const rl = require("readline-sync");

let notas = [];
let soma = 0;

for (let i = 0; i < 4; i++) {

    let nota = rl.questionFloat(`Nota ${i + 1}: `);

    notas.push(nota);

    soma += nota;

}

let media = soma / notas.length;

console.log();

console.log("Média:", media.toFixed(2));
```

---

# 🎯 Exemplo com `while`

## Login

```js
const rl = require("readline-sync");

let senha = "";

while (senha !== "1234") {

    senha = rl.question("Digite a senha: ");

    if (senha !== "1234") {

        console.log("Senha incorreta!");

    }

}

console.log("Acesso permitido.");
```

---

# ⚠️ Erros Comuns

## Esquecer o incremento

```js
while (i < 10) {

}
```

Loop infinito.

---

## Percorrer além do tamanho

Errado

```js
for (let i = 0; i <= vetor.length; i++) {

}
```

O correto é:

```js
for (let i = 0; i < vetor.length; i++) {

}
```

---

## Começar pelo índice errado

Errado

```js
frutas[1]
```

Pensando que é o primeiro elemento.

Lembre-se:

```txt
Primeiro elemento → índice 0
```

---

# 💡 Dica

Sempre que precisar percorrer um array:

```js
for (let i = 0; i < array.length; i++) {

    console.log(array[i]);

}
```

Essa é uma das estruturas mais utilizadas na programação.

---

# 🎯 Exercícios

## Exercício 1 — Contagem

Utilizando um `for`, exiba os números de 1 até 20.

---

## Exercício 2 — Contagem Regressiva

Utilizando um `for`, exiba os números de 20 até 1.

---

## Exercício 3 — Soma

Calcule a soma dos números de 1 até 100 utilizando um laço de repetição.

---

## Exercício 4 — Cadastro de Frutas

Solicite ao usuário o nome de 5 frutas.

Armazene em um array.

Ao final, exiba todas as frutas cadastradas.

---

## Exercício 5 — Média da Turma

Solicite 5 notas.

Armazene em um array.

Calcule:

* média;
* maior nota;
* menor nota.

---

## Exercício 6 — Tabuada

Solicite um número.

Utilizando um `for`, exiba sua tabuada de 1 a 10.

Exemplo:

```txt
7 x 1 = 7
7 x 2 = 14
...
7 x 10 = 70
```

---

# 🧠 Desafio

## Sistema de Cadastro de Alunos

Crie um programa que:

1. Solicite quantos alunos serão cadastrados.
2. Cadastre o nome de cada aluno em um array.
3. Ao final, exiba todos os nomes utilizando um `for`.
4. Informe também a quantidade total de alunos cadastrados.

> **Desafio extra:** após listar os alunos, pergunte ao usuário qual nome deseja procurar e informe se ele está cadastrado utilizando um novo laço de repetição.
