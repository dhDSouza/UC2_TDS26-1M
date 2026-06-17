# 🚀 Aula 5 — Estruturas Condicionais Encadeadas e Aninhadas

## 🎯 Objetivos da Aula

Ao final da aula os alunos deverão ser capazes de:

* Compreender o conceito de decisões mais complexas;
* Utilizar múltiplas condições com `if`, `else if` e `else`;
* Criar estruturas condicionais dentro de outras condicionais;
* Resolver problemas utilizando lógica de decisão;
* Construir programas com várias regras de negócio.

---

# 🧠 Revisando a Aula Anterior

Na última aula aprendemos:

✅ Operadores relacionais

✅ Operadores lógicos

✅ Estruturas `if`

✅ Estruturas `if/else`

✅ Estruturas `if/else if/else`

Agora vamos deixar nossas decisões mais inteligentes.

---

# 🤔 O Que São Condicionais Encadeadas?

São situações onde temos várias possibilidades.

Por exemplo:

Uma escola possui as regras:

* Nota ≥ 9 → Excelente
* Nota ≥ 7 → Aprovado
* Nota ≥ 5 → Recuperação
* Nota < 5 → Reprovado

Nesse caso precisamos testar várias condições em sequência.

---

# 📌 Exemplo

```js
let nota = 6;

if (nota >= 9) {
    console.log('Excelente');
}
else if (nota >= 7) {
    console.log('Aprovado');
}
else if (nota >= 5) {
    console.log('Recuperação');
}
else {
    console.log('Reprovado');
}
```

---

# 📊 Fluxograma

```txt
             ┌───────────┐
             │ nota >= 9 │
             └─────┬─────┘
                   │
             Sim  ▼
           Excelente
                   │
             Não   ▼
             ┌───────────┐
             │ nota >= 7 │
             └─────┬─────┘
                   │
             Sim  ▼
            Aprovado
                   │
             Não   ▼
             ┌───────────┐
             │ nota >= 5 │
             └─────┬─────┘
                   │
             Sim  ▼
          Recuperação
                   │
             Não  ▼
          Reprovado
```

---

# 🏗️ O Que São Condicionais Aninhadas?

Uma estrutura aninhada acontece quando colocamos um `if` dentro de outro `if`.

Exemplo:

```js
if (condicao1) {

    if (condicao2) {

    }

}
```

---

# 🎮 Exemplo do Mundo Real

Para dirigir é necessário:

* Ter 18 anos ou mais
* Possuir CNH

Primeira verificação:

* Tem idade suficiente?

Segunda verificação:

* Possui CNH?

---

## Código

```js
let idade = 20;
let possuiCNH = true;

if (idade >= 18) {

    if (possuiCNH) {
        console.log('Pode dirigir');
    }
    else {
        console.log('Precisa tirar CNH');
    }

}
else {
    console.log('Menor de idade');
}
```

---

# 📊 Fluxograma

```txt
            idade >= 18 ?
                 │
          ┌──────┴──────┐
          │             │
         Sim           Não
          │             │
          ▼             ▼
      Possui CNH?   Menor de idade
          │
    ┌─────┴─────┐
    │           │
   Sim         Não
    │           │
    ▼           ▼
Pode dirigir  Tirar CNH
```

---

# 🔍 Comparando Encadeado e Aninhado

## Encadeado

```js
if (nota >= 9) {

}
else if (nota >= 7) {

}
else {

}
```

Usado quando temos várias opções.

---

## Aninhado

```js
if (idade >= 18) {

    if (possuiCNH) {

    }

}
```

Usado quando uma decisão depende da outra.

---

# 🎯 Exemplo Completo

## Sistema de Acesso

Regras:

* Usuário correto
* Senha correta
* Conta ativa

---

```js
let usuario = 'admin';
let senha = '1234';
let ativo = true;

if (usuario === 'admin') {

    if (senha === '1234') {

        if (ativo) {
            console.log('Acesso liberado');
        }
        else {
            console.log('Conta desativada');
        }

    }
    else {
        console.log('Senha incorreta');
    }

}
else {
    console.log('Usuário não encontrado');
}
```

---

# ⚠️ Atenção ao Operador ==

Em JavaScript existe:

```js
==
```

e

```js
===
```

---

## Exemplo

```js
console.log(10 == '10');
```

Resultado:

```txt
true
```

---

```js
console.log(10 === '10');
```

Resultado:

```txt
false
```

---

### Recomendação

Sempre utilizar:

```js
===
```

e

```js
!==
```

Pois fazem comparação de valor e tipo.

---

# 🎮 Exemplo Prático

## Categoria de Campeonato

```js
const rl = require('readline-sync');

let idade = rl.questionInt('Digite sua idade: ');

if (idade < 12) {
    console.log('Categoria Infantil');
}
else if (idade < 18) {
    console.log('Categoria Juvenil');
}
else if (idade < 40) {
    console.log('Categoria Adulto');
}
else {
    console.log('Categoria Master');
}
```

---

# 🎯 Exercícios

## Exercício 1 — Faixa Etária

Solicite a idade.

Exiba:

* Criança → até 12 anos
* Adolescente → 13 a 17
* Adulto → 18 a 59
* Idoso → 60 ou mais

---

## Exercício 2 — Triângulo

Peça três lados.

Verifique:

* Equilátero → todos iguais
* Isósceles → dois iguais
* Escaleno → todos diferentes

---

## Exercício 3 — Desconto Progressivo

Peça o valor da compra.

Regras:

* Até R$100 → sem desconto
* Até R$300 → 5%
* Até R$500 → 10%
* Acima de R$500 → 15%

Mostrar:

* Valor original
* Percentual aplicado
* Valor final

---

## Exercício 4 — Aprovação com Frequência

Solicite:

* Nota final
* Frequência (%)

Regras:

Se frequência for menor que 75%:

```txt
Reprovado por frequência
```

Caso contrário:

* Nota ≥ 7 → Aprovado
* Nota ≥ 5 → Recuperação
* Nota < 5 → Reprovado

---

## Exercício 5 — Calculadora de IMC

Solicite:

* Peso
* Altura

Calcule o IMC.

Classifique:

* Abaixo de 18.5 → Abaixo do peso
* 18.5 a 24.9 → Peso normal
* 25 a 29.9 → Sobrepeso
* 30 ou mais → Obesidade

---

# 🧠 Desafio

## Pedra, Papel ou Tesoura

O computador escolhe:

```js
// Còdigo para gerar um número aleatório entre 0 e 3
let computador = Math.floor(Math.random() * 3);
```

Representando:

```txt
0 = Pedra
1 = Papel
2 = Tesoura
```

O usuário escolhe uma opção.

Determine:

* Vitória
* Derrota
* Empate

Utilizando estruturas condicionais.

---

# 💡 Dica de Programador

Sistemas reais raramente possuem apenas uma decisão.

Quando você faz login em uma rede social, compra em um e-commerce ou realiza uma transferência bancária, dezenas de condicionais são executadas para validar permissões, regras e dados.

Aprender condicionais encadeadas e aninhadas é o primeiro passo para criar sistemas que realmente resolvem problemas do mundo real. 🚀
