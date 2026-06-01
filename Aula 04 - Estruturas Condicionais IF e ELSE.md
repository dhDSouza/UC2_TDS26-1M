# 🚀 Aula 4 — Estruturas Condicionais com JavaScript

## 🎯 Objetivos da Aula

Ao final da aula deverão ser capazes de:

* Compreender o conceito de tomada de decisão;
* Utilizar estruturas condicionais;
* Criar programas que respondem de forma diferente conforme os dados informados;
* Utilizar `if`, `else` e `else if`;
* Trabalhar com operadores relacionais e lógicos.

---

# 🧠 Revisando a Aula Anterior

Na última aula aprendemos:

✅ Operadores matemáticos

✅ Concatenação de textos

✅ Entrada de dados com `readline-sync`

✅ Conversão de tipos

✅ Fluxo de Entrada → Processamento → Saída

Agora vamos ensinar nossos programas a **tomar decisões** 🤖

---

# 🤔 O Que São Estruturas Condicionais?

Até agora nossos programas executavam tudo na mesma ordem.

Mas e se quisermos:

* verificar se alguém é maior de idade?
* descobrir se um número é positivo?
* informar se um aluno foi aprovado?

Precisamos criar condições.

---

# 🏗️ Exemplo do Mundo Real

Imagine uma catraca:

```txt
Tem ingresso?
      │
   ┌──┴──┐
   │     │
 Sim    Não
   │      │
 Entrar  Bloquear
```

O programa funciona da mesma forma.

---

# 📌 Estrutura IF

O `if` significa:

> "SE algo acontecer, execute este bloco."

Sintaxe:

```js
if (condicao) {
    // código
}
```

---

## Exemplo

```js
let idade = 20;

if (idade >= 18) {
    console.log('Maior de idade');
}
```

Resultado:

```txt
Maior de idade
```

---

# 🔍 Operadores Relacionais

São usados para comparar valores.

| Operador | Significado    |
| -------- | -------------- |
| `>`      | Maior que      |
| `<`      | Menor que      |
| `>=`     | Maior ou igual |
| `<=`     | Menor ou igual |
| `==`     | Igual          |
| `!=`     | Diferente      |

---

## Exemplos

```js
console.log(10 > 5);
```

Resultado:

```txt
true
```

---

```js
console.log(10 < 5);
```

Resultado:

```txt
false
```

---

# 📌 Estrutura ELSE

O `else` significa:

> "Caso a condição não seja verdadeira."

Sintaxe:

```js
if (condicao) {
    // verdadeiro
}
else {
    // falso
}
```

---

## Exemplo

```js
let idade = 15;

if (idade >= 18) {
    console.log('Maior de idade');
}
else {
    console.log('Menor de idade');
}
```

Resultado:

```txt
Menor de idade
```

---

# 📊 Fluxograma do IF/ELSE

```txt
          ┌───────────────┐
          │ idade >= 18 ? │
          └───────┬───────┘
                  │
        ┌─────────┴─────────┐
        │                   │
      Sim                 Não
        │                   │
        ▼                   ▼
 Maior de idade     Menor de idade
```

---

# 📌 Estrutura ELSE IF

Usada quando temos mais de duas possibilidades.

Sintaxe:

```js
if (condicao1) {

}
else if (condicao2) {

}
else {

}
```

---

## Exemplo

```js
let nota = 8;

if (nota >= 9) {
    console.log('Excelente');
}
else if (nota >= 7) {
    console.log('Aprovado');
}
else {
    console.log('Reprovado');
}
```

---

# 📊 Fluxograma do ELSE IF

```txt
              ┌───────────┐
              │ nota >= 9 │
              └─────┬─────┘
                    │
            ┌───────┴───────┐
            │               │
          Sim              Não
            │               │
      Excelente             ▼
                      ┌───────────┐
                      │ nota >= 7 │
                      └─────┬─────┘
                            │
                    ┌───────┴───────┐
                    │               │
                  Sim              Não
                    │               │
              Aprovado         Reprovado
```

---

# 🔗 Operadores Lógicos

Permitem combinar condições.

| Operador | Significado |
| -------- | ----------- |
| `&&`     | E           |
| `\|\|`     | OU          |
| `!`      | NÃO         |

---

# 🧪 Operador E (&&)

As duas condições precisam ser verdadeiras.

```js
let idade = 20;
let possuiCNH = true;

if (idade >= 18 && possuiCNH) {
    console.log('Pode dirigir');
}
```

---

# 🧪 Operador OU (||)

Apenas uma condição precisa ser verdadeira.

```js
let possuiIngresso = false;
let nomeNaLista = true;

if (possuiIngresso || nomeNaLista) {
    console.log('Entrada liberada');
}
```

---

# 🧪 Operador NÃO (!)

Inverte o valor.

```js
let chovendo = false;

if (!chovendo) {
    console.log('Pode sair');
}
```

---

# 🎮 Exemplo Completo

```js
const rl = require('readline-sync');

let idade = rl.questionInt('Digite sua idade: ');

if (idade >= 18) {
    console.log('Você é maior de idade.');
}
else {
    console.log('Você é menor de idade.');
}
```

---

# 🎯 Exercícios

## Exercício 1 — Maior de Idade

Peça a idade do usuário.

Se for maior ou igual a 18:

```txt
Maior de idade
```

Caso contrário:

```txt
Menor de idade
```

---

## Exercício 2 — Número Positivo

Peça um número.

Verifique:

* positivo;
* negativo;
* zero.

---

## Exercício 3 — Par ou Ímpar

Peça um número.

Utilize `%`.

Exiba:

```txt
Número Par
```

ou

```txt
Número Ímpar
```

---

## Exercício 4 — Aprovação Escolar

Peça a nota do aluno.

Regras:

* Nota ≥ 7 → Aprovado
* Nota ≥ 5 → Recuperação
* Nota < 5 → Reprovado

---

## Exercício 5 — Login Simples

Crie:

```js
let usuarioCorreto = 'admin';
let senhaCorreta = '1234';
```

Peça usuário e senha.

Se estiver correto:

```txt
Login realizado com sucesso
```

Caso contrário:

```txt
Usuário ou senha inválidos
```

---

## Exercício 6 — Calculadora de Desconto

Peça o valor de uma compra.

Se o valor for maior ou igual a R$100:

Aplicar 10% de desconto.

Caso contrário:

Sem desconto.

Exiba o valor final.

---

# 🧠 Boas Práticas

✅ Organizar a indentação

✅ Utilizar nomes claros para variáveis

✅ Evitar condições muito grandes

✅ Testar vários cenários

✅ Ler o código antes de executar

---

# 💡 Dica de Programador

Quase todo sistema usa estruturas condicionais:

* Login
* Cadastro
* Jogos
* Bancos
* Redes Sociais
* E-commerce

Aprender `if`, `else` e `else if` é um dos primeiros passos para começar a construir programas realmente úteis. 🚀
