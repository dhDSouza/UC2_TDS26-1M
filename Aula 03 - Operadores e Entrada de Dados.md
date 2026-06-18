# 🚀 Aula 3 — Operadores e Entrada de Dados com JavaScript

## 🎯 Objetivos da Aula

Ao final da aula deverão ser capazes de:

* Utilizar operadores matemáticos;
* Trabalhar com concatenação de textos;
* Receber dados do usuário;
* Converter tipos de dados;
* Desenvolver pequenos programas interativos.

---

# 🧠 Revisando a Aula Anterior

Na última aula aprendemos:

✅ O que é programação   
✅ O que é JavaScript   
✅ Variáveis e constantes   
✅ `console.log()`   
✅ Tipos básicos de dados   

Agora vamos deixar os programas mais inteligentes 😎

---

# ➕ Operadores Matemáticos

Os operadores servem para realizar cálculos.

| Operador | Operação         |
|:--------:|:----------------:|
|    `+`   | Soma             |
|    `-`   | Subtração        |
|    `*`   | Multiplicação    |
|    `/`   | Divisão          |
|    `%`   | Resto da divisão |
|    `**`  | Potenciação      |

---

# 🧪 Exemplos

```js
let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
```

---

# 📌 Operador de Resto `%`

Muito usado para descobrir:

* números pares;
* múltiplos;
* divisibilidade.

---

## Exemplo

```js
let numero = 10;

console.log(numero % 2);
```

Resultado:

```txt
0
```

Se sobra `0`, o número é par.

---

# 📝 Concatenação de Texto

Juntar textos.

---

## Exemplo

```js
let nome = 'Daniel';

console.log('Olá ' + nome);
```

---

# 💡 Template String

Forma moderna de juntar textos.

Usa crase `` ` ``.

---

## Exemplo

```js
let nome = 'Josefina da Costa';
let idade = 20;

console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);
```

---

# 📥 Entrada de Dados

Até agora os dados estavam fixos no código.

Agora vamos receber informações do usuário.

---

# 📦 Instalando o `readline-sync`

No terminal:

```bash
npm init -y
```

Depois:

```bash
npm install readline-sync
```

---

# 📄 Utilizando o Readline

```js
const rl = require('readline-sync');
```

---

# 🧪 Primeiro Exemplo com Entrada

```js
const rl = require('readline-sync');

let nome = rl.question('Digite seu nome: ');

console.log(`Olá ${nome}`);
```

---

# 🔢 Entrada Numérica

O prompt sempre retorna texto.

Precisamos converter.

---

## Exemplo com `number`

```js
const rl = require('readline-sync');

let idade = rl.questionInt('Digite sua idade: ');

console.log(idade);
```

---

# ⚠️ Conversão de Tipos

## Texto → Número

```js
Number(valor)
```

---

## Número → Texto

```js
String(valor)
```

---

# 🏗️ Fluxo de um Programa

```txt
Entrada → Processamento → Saída
```

Exemplo:

| Entrada |  Processamento  |      Saída     |
|:-------:|:---------------:|:--------------:|
|  idade  | verificar idade | maior ou menor |

---

# 🎯 Exercícios

## Exercício 1 — Saudação

Peça o nome do usuário.

Exiba o nome do usuário no console.

Exemplo:

```txt
Olá, Adalberto!
```

---

## Exercício 2 — Perfil

Peça:

* nome;
* idade;
* cidade.

Exiba tudo organizado no terminal.

---

## Exercício 3 — Soma

Peça dois números.

Mostre o resultado da soma.

---

## Exercício 4 — Calculadora Simples

Peça dois números.

Mostre:

* soma;
* subtração;
* multiplicação;
* divisão.

---

## Exercício 5 — Antecessor e Sucessor

Peça um número.

Mostre:

* número digitado;
* antecessor;
* sucessor.

---

## Exercício 6 — Média Simples

Peça duas notas.

Calcule a média.

---

# ⭐ Desafio Extra

Crie um mini cadastro de jogador 🎮

Pergunte:

* nome;
* jogo favorito;
* horas jogadas;
* plataforma favorita.

Exiba algo parecido com:

```txt
===== PERFIL GAMER =====

Nome: Carlos
Jogo Favorito: Minecraft
Horas Jogadas: 500
Plataforma: PC
```

---

# 🧠 Boas Práticas

✅ Nomear variáveis corretamente   
✅ Indentar o código   
✅ Testar várias vezes   
✅ Ler mensagens de erro   
✅ Praticar muito   

---

# 📚 Dicas

## Quando travar:

* releia o código;
* use `console.log()`;
* teste partes menores;
* pesquise o erro.
