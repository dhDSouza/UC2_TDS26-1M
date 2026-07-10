# 🚀 Aula 9 — Objetos Literais e Funções

## 🎯 Objetivos da Aula

Ao final da aula deverão ser capazes de:

* Compreender o conceito de objeto em JavaScript;
* Criar objetos literais;
* Acessar e alterar propriedades de objetos;
* Adicionar e remover propriedades;
* Criar funções;
* Criar funções com parâmetros;
* Utilizar valores de retorno (`return`);
* Compreender como funções ajudam a reutilizar código.

---

# 🧠 Revisando a Aula Anterior

Na última aula aprendemos:

✅ `for`

✅ `while`

✅ `for...of`

✅ `for...in`

✅ `forEach()`

✅ Métodos de arrays

* `push()`
* `pop()`
* `shift()`
* `unshift()`
* `splice()`
* `includes()`
* `indexOf()`
* `join()`

Até agora nossos programas armazenavam informações em variáveis e arrays.

Mas e quando precisamos representar algo mais complexo?

Por exemplo:

Uma pessoa possui:

* nome;
* idade;
* profissão;
* cidade.

Criar uma variável para cada informação rapidamente se torna confuso.

É aí que entram os **objetos**.

---

# 📦 O que é um Objeto?

Um objeto é uma estrutura que permite agrupar várias informações relacionadas.

Exemplo:

```txt
Pessoa

Nome: João

Idade: 25

Profissão: Desenvolvedor
```

Todas essas informações pertencem à mesma pessoa.

---

# 📌 Criando um Objeto Literal

Em JavaScript utilizamos chaves `{}`.

```js
let pessoa = {

    nome: "João",

    idade: 25,

    profissao: "Desenvolvedor"

};
```

Cada informação recebe o nome de **propriedade**.

---

## Estrutura

```txt
Objeto

{

    propriedade: valor,

    propriedade: valor

}
```

---

# 🔍 Acessando Propriedades

Podemos acessar utilizando ponto (`.`).

```js
console.log(pessoa.nome);

console.log(pessoa.idade);

console.log(pessoa.profissao);
```

Resultado

```txt
João

25

Desenvolvedor
```

---

## Também podemos utilizar colchetes

```js
console.log(pessoa["nome"]);

console.log(pessoa["idade"]);
```

Resultado

```txt
João

25
```

Essa forma é útil quando o nome da propriedade está armazenado em uma variável.

---

# ✏️ Alterando Valores

Podemos modificar qualquer propriedade.

```js
pessoa.idade = 26;

console.log(pessoa.idade);
```

Resultado

```txt
26
```

---

# ➕ Adicionando Novas Propriedades

Basta criar uma nova.

```js
pessoa.cidade = "Porto Alegre";

console.log(pessoa);
```

Resultado

```txt
{

    nome: "João",

    idade: 26,

    profissao: "Desenvolvedor",

    cidade: "Porto Alegre"

}
```

---

# ❌ Removendo Propriedades

Utilizamos o operador `delete`.

```js
delete pessoa.profissao;

console.log(pessoa);
```

Resultado

```txt
{

    nome: "João",

    idade: 26,

    cidade: "Porto Alegre"

}
```

---

# 📋 Objetos e Arrays

Também podemos armazenar vários objetos dentro de um array.

```js
let alunos = [

    {
        nome: "Ana",
        nota: 9
    },

    {
        nome: "Carlos",
        nota: 7
    },

    {
        nome: "Marina",
        nota: 10
    }

];
```

---

## Percorrendo Objetos

```js
for (let aluno of alunos) {

    console.log(aluno.nome);

}
```

Resultado

```txt
Ana

Carlos

Marina
```

---

# 🧩 O que é uma Função?

Uma função é um bloco de código criado para executar uma tarefa.

Imagine que precisamos exibir uma linha várias vezes.

Sem função:

```js
console.log("----------------");

console.log("----------------");

console.log("----------------");
```

Muito código repetido.

---

# 📌 Criando uma Função

```js
function linha() {

    console.log("----------------");

}
```

Agora basta chamá-la.

```js
linha();

linha();

linha();
```

Resultado

```txt
----------------

----------------

----------------
```

---

# 📞 Chamando uma Função

Criar a função não significa executá-la.

Ela só será executada quando for chamada.

```js
function mensagem() {

    console.log("Bem-vindo!");

}

mensagem();
```

Resultado

```txt
Bem-vindo!
```

---

# 🎯 Funções com Parâmetros

As funções podem receber informações.

```js
function saudar(nome) {

    console.log("Olá, " + nome);

}
```

Chamando:

```js
saudar("Maria");

saudar("Pedro");
```

Resultado

```txt
Olá, Maria

Olá, Pedro
```

---

# 📦 Mais de um Parâmetro

```js
function apresentar(nome, idade) {

    console.log(nome);

    console.log(idade);

}
```

Chamando

```js
apresentar("Lucas", 20);
```

Resultado

```txt
Lucas

20
```

---

# ➕ Funções com Retorno

Nem sempre queremos apenas exibir informações.

Às vezes precisamos devolver um resultado.

Para isso utilizamos `return`.

```js
function somar(a, b) {

    return a + b;

}
```

Utilizando:

```js
let resultado = somar(10, 5);

console.log(resultado);
```

Resultado

```txt
15
```

---

# 🔄 Outra Forma

Podemos utilizar diretamente.

```js
console.log(

    somar(7, 3)

);
```

Resultado

```txt
10
```

---

# ⚠️ Diferença entre `console.log()` e `return`

Observe.

```js
function teste1() {

    console.log("Olá");

}
```

Executa:

```txt
Olá
```

Mas não devolve nenhum valor.

Já:

```js
function teste2() {

    return "Olá";

}
```

Agora ela devolve um valor.

```js
console.log(

    teste2()

);
```

Resultado

```txt
Olá
```

---

# 🎮 Exemplo Prático

## Cadastro de um Livro

```js
const rl = require("readline-sync");

let livro = {

    titulo: rl.question("Título: "),

    autor: rl.question("Autor: "),

    paginas: Number(

        rl.question("Quantidade de páginas: ")

    )

};

console.log();

console.log("Livro cadastrado:");

console.log(livro);
```

---

# 🎮 Exemplo Prático

## Calculadora Simples

```js
const rl = require("readline-sync");

function multiplicar(a, b) {

    return a * b;

}

let numero1 = Number(

    rl.question("Primeiro número: ")

);

let numero2 = Number(

    rl.question("Segundo número: ")

);

console.log();

console.log(

    "Resultado:",

    multiplicar(numero1, numero2)

);
```

---

# 💡 Boas Práticas

* Utilize nomes claros para as propriedades.
* Utilize nomes de funções que indiquem sua finalidade.
* Evite repetir código quando uma função pode resolver.
* Agrupe informações relacionadas em objetos.

---

# ⚠️ Erros Comuns

## Esquecer de chamar a função

```js
function mensagem() {

    console.log("Olá");

}
```

Nada acontece.

É necessário chamar:

```js
mensagem();
```

---

## Esquecer o `return`

```js
function multiplicar(a, b) {

    a * b;

}
```

Resultado:

```txt
undefined
```

O correto:

```js
function multiplicar(a, b) {

    return a * b;

}
```

---

## Confundir objeto com array

Objeto

```js
let carro = {

    marca: "Ford",

    modelo: "Ka"

};
```

Array

```js
let carros = [

    "Ford",

    "Chevrolet",

    "Fiat"

];
```

Lembre-se:

* Objetos armazenam informações identificadas por propriedades.
* Arrays armazenam listas de elementos organizados por índices.

---

# 📚 Resumo da Aula

Aprendemos:

* Objetos literais;
* Propriedades;
* Acesso utilizando `.` e `[]`;
* Alteração de propriedades;
* Inclusão e remoção de propriedades;
* Arrays de objetos;
* Funções;
* Parâmetros;
* `return`;
* Reutilização de código.

---

# 🎯 Exercícios

## Exercício 1 — Animal de Estimação

Crie um objeto chamado `pet` contendo:

* nome;
* espécie;
* idade.

Depois exiba cada propriedade utilizando a notação de ponto.

---

## Exercício 2 — Alterando Informações

Crie um objeto chamado `filme` contendo:

* título;
* gênero;
* ano.

Depois altere o ano e adicione a propriedade `diretor`.

Ao final, exiba o objeto completo.

---

## Exercício 3 — Saudação Personalizada

Crie uma função chamada `boasVindas` que receba o nome de uma pessoa e exiba:

```txt
Seja bem-vindo(a), João!
```

Teste a função com pelo menos três nomes diferentes.

---

## Exercício 4 — Conversor de Temperatura

Crie uma função chamada `celsiusParaFahrenheit` que receba uma temperatura em graus Celsius e retorne o valor correspondente em Fahrenheit.

Utilize a fórmula:

```txt
F = (C × 9/5) + 32
```

Exiba o resultado no console.

---

## Exercício 5 — Catálogo de Filmes

Crie um array contendo três objetos.

Cada objeto deve representar um filme com:

* título;
* duração (em minutos).

Percorra o array utilizando `for...of` e exiba as informações de cada filme.

---

## Exercício 6 — Verificando Maioridade

Crie uma função chamada `ehMaiorDeIdade` que receba uma idade e retorne:

* `true`, caso a idade seja maior ou igual a 18;
* `false`, caso contrário.

Teste a função com diferentes valores.

---

# 🧠 Desafio

## Agenda Telefônica

Desenvolva um programa que:

1. Cadastre três contatos utilizando objetos.
2. Cada contato deve possuir:

   * nome;
   * telefone;
   * e-mail.
3. Armazene todos os contatos em um array.
4. Percorra o array utilizando `for...of`.
5. Exiba cada contato de forma organizada, por exemplo:

```txt
Contato 1

Nome: João
Telefone: (51) 99999-9999
E-mail: joao@email.com
```

---
