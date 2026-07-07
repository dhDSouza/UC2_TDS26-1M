# 🚀 Aula 8 — Percorrendo Arrays com `for...of`, `for...in` e `forEach`

## 🎯 Objetivos da Aula

Ao final da aula deverão ser capazes de:

* Compreender diferentes formas de percorrer um array;
* Utilizar corretamente `for...of`;
* Utilizar corretamente `for...in`;
* Utilizar o método `forEach()`;
* Identificar quando cada estrutura é mais adequada;
* Manipular elementos de arrays de maneira mais eficiente.

---

# 🧠 Revisando a Aula Anterior

Na última aula aprendemos:

✅ Arrays

✅ Índices

✅ `.push()`

✅ `.length`

✅ `for`

✅ `while`

Até agora sempre percorremos um array utilizando:

```js
for (let i = 0; i < frutas.length; i++) {

    console.log(frutas[i]);

}
```

Funciona muito bem.

Mas o JavaScript oferece outras formas de fazer isso.

Hoje conheceremos três delas.

---

# 📦 Relembrando um Array

```js
let frutas = [
    "Maçã",
    "Banana",
    "Uva",
    "Laranja"
];
```

Visualmente:

```txt
Índice

0 → Maçã
1 → Banana
2 → Uva
3 → Laranja
```

---

# 🔁 O `for...of`

O `for...of` percorre diretamente os **valores** do array.

Sua sintaxe é bem simples.

```js
for (let fruta of frutas) {

    console.log(fruta);

}
```

Resultado

```txt
Maçã
Banana
Uva
Laranja
```

---

## O que acontece?

Em cada repetição:

```txt
fruta = "Maçã"

↓

fruta = "Banana"

↓

fruta = "Uva"

↓

fruta = "Laranja"
```

Não precisamos controlar índices.

---

# 📌 Comparação

Com `for`

```js
for (let i = 0; i < frutas.length; i++) {

    console.log(frutas[i]);

}
```

Com `for...of`

```js
for (let fruta of frutas) {

    console.log(fruta);

}
```

Mesmo resultado.

Muito menos código.

---

# 🤔 Quando usar `for...of`?

Quando você precisa apenas dos valores.

Exemplo:

* imprimir nomes;
* calcular média;
* mostrar produtos;
* listar alunos.

---

# 🔢 O `for...in`

O `for...in` percorre os **índices**.

```js
for (let indice in frutas) {

    console.log(indice);

}
```

Resultado

```txt
0
1
2
3
```

---

## Acessando o elemento

Como o `for...in` retorna o índice:

```js
for (let indice in frutas) {

    console.log(frutas[indice]);

}
```

Resultado

```txt
Maçã
Banana
Uva
Laranja
```

---

# 📌 Mostrando índice e valor

```js
for (let indice in frutas) {

    console.log(indice, "-", frutas[indice]);

}
```

Resultado

```txt
0 - Maçã
1 - Banana
2 - Uva
3 - Laranja
```

---

# 🤔 Quando usar `for...in`?

Quando o índice é importante.

Exemplo:

```txt
1º colocado

2º colocado

3º colocado
```

Ou quando precisamos alterar posições específicas.

---

# ⚠️ Atenção

Muitos iniciantes confundem:

```txt
for...of → valores

for...in → índices
```

Uma forma de lembrar:

```txt
OF → Objetos (valores)

IN → Índices
```

---

# 🔄 O método `forEach()`

Outra forma muito utilizada é o `forEach`.

Ele pertence ao próprio array.

Sintaxe

```js
array.forEach(function(elemento) {

});
```

---

## Exemplo

```js
frutas.forEach(function(fruta) {

    console.log(fruta);

});
```

Resultado

```txt
Maçã
Banana
Uva
Laranja
```

---

## Utilizando Arrow Function

Hoje em dia é comum escrever assim:

```js
frutas.forEach((fruta) => {

    console.log(fruta);

});
```

---

## Recebendo índice

O `forEach` também pode fornecer o índice.

```js
frutas.forEach((fruta, indice) => {

    console.log(indice, fruta);

});
```

Resultado

```txt
0 Maçã

1 Banana

2 Uva

3 Laranja
```

---

# 📊 Comparando os três

## `for...of`

```js
for (let fruta of frutas) {

    console.log(fruta);

}
```

Obtém:

```txt
Valores
```

---

## `for...in`

```js
for (let indice in frutas) {

    console.log(indice);

}
```

Obtém:

```txt
Índices
```

---

## `forEach`

```js
frutas.forEach((fruta) => {

    console.log(fruta);

});
```

Obtém:

```txt
Valores
```

---

# 📦 Outros Métodos Úteis

## `includes()`

Verifica se um valor existe.

```js
let frutas = [
    "Maçã",
    "Banana",
    "Uva"
];

console.log(
    frutas.includes("Banana")
);
```

Resultado

```txt
true
```

---

## `indexOf()`

Retorna a posição.

```js
console.log(
    frutas.indexOf("Uva")
);
```

Resultado

```txt
2
```

Caso não encontre:

```txt
-1
```

---

## `join()`

Transforma um array em texto.

```js
let nomes = [
    "Ana",
    "Carlos",
    "Maria"
];

console.log(
    nomes.join(", ")
);
```

Resultado

```txt
Ana, Carlos, Maria
```

---

## `pop()`

Remove o último elemento.

```js
frutas.pop();
```

Antes

```txt
Maçã
Banana
Uva
```

Depois

```txt
Maçã
Banana
```

---

## `shift()`

Remove o primeiro.

```js
frutas.shift();
```

---

## `unshift()`

Adiciona no início.

```js
frutas.unshift("Melancia");
```

---

## `splice()`

Permite remover ou adicionar elementos em qualquer posição.

Removendo:

```js
let frutas = [
    "Maçã",
    "Banana",
    "Uva",
    "Laranja"
];

frutas.splice(1, 2);

console.log(frutas);
```

Resultado

```txt
["Maçã", "Laranja"]
```

---

Adicionando:

```js
frutas.splice(1, 0, "Abacaxi");
```

Resultado

```txt
["Maçã", "Abacaxi", "Laranja"]
```

---

# 🎮 Exemplo Prático

## Lista de Compras

```js
const rl = require("readline-sync");

let compras = [];

for (let i = 0; i < 5; i++) {

    compras.push(
        rl.question("Produto: ")
    );

}

console.log();

console.log("Lista:");

compras.forEach((produto, indice) => {

    console.log(`${indice + 1}. ${produto}`);

});
```

---

# 🎮 Exemplo Prático

## Procurando um Nome

```js
const rl = require("readline-sync");

let alunos = [
    "Ana",
    "Carlos",
    "Maria",
    "Pedro"
];

let nome = rl.question("Nome: ");

if (alunos.includes(nome)) {

    console.log("Aluno encontrado!");

} else {

    console.log("Aluno não encontrado.");

}
```

---

# ⚠️ Erros Comuns

## Confundir `for...of` e `for...in`

Errado

```js
for (let fruta in frutas) {

    console.log(fruta);

}
```

Esperando:

```txt
Maçã
Banana
```

Mas o resultado será:

```txt
0
1
2
3
```

---

## Esquecer que `forEach` não utiliza `break`

Isto gera erro:

```js
frutas.forEach((fruta) => {

    if (fruta === "Banana") {

        break;

    }

});
```

O `break` só funciona em estruturas de repetição como `for`, `while` e `do...while`.

---

# 💡 Dica

Na prática:

* `for` → quando precisa controlar o índice ou interromper a repetição.
* `for...of` → quando quer apenas percorrer os valores.
* `for...in` → quando precisa dos índices.
* `forEach()` → quando deseja executar uma ação em todos os elementos de forma simples e legível.

---

# 🎯 Exercícios

## Exercício 1 — Lista de Nomes

Crie um array com cinco nomes.

Exiba todos utilizando `for...of`.

---

## Exercício 2 — Índices

Percorra o mesmo array utilizando `for...in`.

Exiba:

```txt
0 - Ana

1 - Carlos

...
```

---

## Exercício 3 — Produtos

Cadastre cinco produtos utilizando `push()`.

Depois utilize `forEach()` para exibir todos.

---

## Exercício 4 — Procurando uma Fruta

Crie um array de frutas.

Pergunte ao usuário uma fruta.

Utilize `includes()` para informar se ela está cadastrada.

---

## Exercício 5 — Removendo Elementos

Crie um array com cinco cidades.

Remova a terceira cidade utilizando `splice()`.

Exiba o array atualizado.

---

## Exercício 6 — Lista Formatada

Crie um array contendo cinco linguagens de programação.

Utilize `join(" | ")` para exibir:

```txt
JavaScript | Python | Java | C# | PHP
```

---

# 🧠 Desafio

## Gerenciador de Lista de Compras

Crie um programa que:

1. Cadastre 5 produtos em um array.
2. Exiba todos utilizando `forEach()`.
3. Pergunte ao usuário qual produto deseja remover.
4. Utilize `indexOf()` para localizar o item.
5. Caso exista, remova-o utilizando `splice()`.
6. Exiba a lista atualizada utilizando `for...of`.
