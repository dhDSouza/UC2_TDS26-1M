# 🚀 Aula 6 — Estrutura de Seleção `switch...case`

## 🎯 Objetivos da Aula

Ao final da aula os alunos deverão ser capazes de:

* Compreender o funcionamento da estrutura `switch`;
* Identificar situações em que o `switch` é mais adequado que `if`;
* Utilizar corretamente `case`, `break` e `default`;
* Resolver problemas utilizando múltiplas opções de escolha;
* Evitar erros comuns com o uso do `switch`.

---

# 🧠 Revisando a Aula Anterior

Na última aula aprendemos:

✅ Condicionais encadeadas (`else if`)

✅ Condicionais aninhadas

✅ Comparações com `===`

✅ Resolução de problemas utilizando várias decisões

Agora veremos uma forma diferente de tomar decisões quando queremos comparar **uma única variável** com diversos valores possíveis.

---

# 🤔 O Que é o `switch`?

Imagine um menu de opções.

Por exemplo:

```txt
1 - Cadastrar
2 - Alterar
3 - Excluir
4 - Listar
```

Poderíamos resolver isso com vários `if`.

Mas existe uma estrutura própria para esse tipo de situação.

Essa estrutura é o **switch**.

---

# 📌 Sintaxe

```js
switch (variavel) {

    case valor1:
        // código
        break;

    case valor2:
        // código
        break;

    default:
        // código
}
```

---

# 🧠 Como Funciona?

O JavaScript:

1. Avalia o valor da variável.
2. Procura um `case` correspondente.
3. Executa aquele bloco.
4. Ao encontrar um `break`, encerra o `switch`.

Caso nenhum `case` seja encontrado, executa o `default`.

---

# 📌 Exemplo

```js
let opcao = 2;

switch (opcao) {

    case 1:
        console.log("Cadastrar");
        break;

    case 2:
        console.log("Alterar");
        break;

    case 3:
        console.log("Excluir");
        break;

    default:
        console.log("Opção inválida");

}
```

Saída:

```txt
Alterar
```

---

# 📊 Fluxograma

```txt
           opção
             │
      ┌──────┴──────┐
      │             │
   case 1        case 2
      │             │
Cadastrar      Alterar
      │             │
      └──────┬──────┘
             │
          case 3
             │
          Excluir
             │
             ▼
         default
```

---

# 🛑 O Papel do `break`

O `break` encerra o `switch`.

Sem ele, o programa continua executando os próximos casos.

---

## Exemplo

```js
let numero = 1;

switch (numero) {

    case 1:
        console.log("Um");

    case 2:
        console.log("Dois");

    case 3:
        console.log("Três");

}
```

Resultado:

```txt
Um
Dois
Três
```

**Isso acontece porque não existe `break`.**

---

## Correto

```js
switch (numero) {

    case 1:
        console.log("Um");
        break;

    case 2:
        console.log("Dois");
        break;

    case 3:
        console.log("Três");
        break;

}
```

Resultado:

```txt
Um
```

---

# ❓ O Que é o `default`?

O `default` funciona como o `else`.

É executado quando nenhum `case` corresponde ao valor informado.

---

## Exemplo

```js
let dia = 9;

switch (dia) {

    case 1:
        console.log("Domingo");
        break;

    case 2:
        console.log("Segunda");
        break;

    default:
        console.log("Dia inválido");

}
```

---

# 🔍 Comparando `if` e `switch`

## Com `if`

```js
if (opcao === 1) {

}
else if (opcao === 2) {

}
else if (opcao === 3) {

}
else {

}
```

---

## Com `switch`

```js
switch (opcao) {

    case 1:

        break;

    case 2:

        break;

    case 3:

        break;

    default:

}
```

---

# 💡 Quando Usar Cada Um?

Use **switch** quando:

* Existe apenas uma variável sendo comparada;
* Existem vários valores possíveis;
* Cada valor executa uma ação diferente.

Exemplo:

* Menu de sistema
* Dias da semana
* Meses
* Cargos
* Opções do usuário

---

Use **if** quando:

* Existem operadores relacionais (`>`, `<`, `>=`, etc.);
* Existem operadores lógicos (`&&`, `||`);
* As condições são mais complexas.

Exemplo:

```js
if (idade >= 18 && possuiCNH) {

}
```

Isso não pode ser escrito diretamente usando `switch`.

---

# 🎮 Exemplo Prático

## Calculadora Soma e Subtração

```js
const rl = require("readline-sync");

let n1 = rl.questionFloat("Primeiro número: ");
let n2 = rl.questionFloat("Segundo número: ");

console.log();
console.log("1 - Soma");
console.log("2 - Subtração");

let opcao = rl.questionInt("Escolha: ");

switch (opcao) {

    case 1:
        console.log("Resultado:", n1 + n2);
        break;

    case 2:
        console.log("Resultado:", n1 - n2);
        break;

    default:
        console.log("Opção inválida.");

}
```

---

# 🎯 Exemplo Completo

## Dias da Semana

```js
const rl = require("readline-sync");

let dia = rl.questionInt("Digite um número de 1 a 7: ");

switch (dia) {

    case 1:
        console.log("Domingo");
        break;

    case 2:
        console.log("Segunda-feira");
        break;

    case 3:
        console.log("Terça-feira");
        break;

    case 4:
        console.log("Quarta-feira");
        break;

    case 5:
        console.log("Quinta-feira");
        break;

    case 6:
        console.log("Sexta-feira");
        break;

    case 7:
        console.log("Sábado");
        break;

    default:
        console.log("Dia inválido.");

}
```

---

# ⭐ Um Recurso Interessante

Vários `case` podem executar o mesmo código.

Exemplo:

```js
let nota = "A";

switch (nota) {

    case "A":
    case "B":
        console.log("Aprovado");
        break;

    case "C":
        console.log("Recuperação");
        break;

    case "D":
    case "F":
        console.log("Reprovado");
        break;

}
```

---

# ⚠️ Atenção

O `switch` utiliza comparação **estrita** (`===`).

Exemplo:

```js
let valor = "10";

switch (valor) {

    case 10:
        console.log("Número");
        break;

    default:
        console.log("Não encontrou");

}
```

Resultado:

```txt
Não encontrou
```

Porque `"10"` é uma string e `10` é um número.

---

# 🎯 Exercícios

## Exercício 1 — Menu de Restaurante

Exiba o seguinte menu:

```txt
1 - Hambúrguer
2 - Pizza
3 - Cachorro-quente
4 - Refrigerante
5 - Sorvete
```

Solicite uma opção e exiba o item escolhido.

Caso contrário:

```txt
Opção inválida.
```

---

## Exercício 2 — Meses do Ano

Solicite um número de 1 a 12.

Mostre o mês correspondente.

---

## Exercício 3 — Calculadora

Solicite:

* Primeiro número
* Segundo número

Depois solicite:

```txt
1 - Soma
2 - Subtração
3 - Multiplicação
4 - Divisão
```

Realize a operação escolhida.

Na divisão, trate o caso de divisão por zero.

---

## Exercício 4 — Mês do Ano

Solicite um número entre 1 e 12.

Mostre o nome do mês correspondente.

Caso seja inválido, informe ao usuário.

---

## Exercício 5 — Classificação de Linguagens

Solicite uma opção:

```txt
1 - JavaScript
2 - Python
3 - Java
4 - PHP
```

Exiba:

* JavaScript → Front-end e Back-end
* Python → Dados e IA
* Java → Desktop e Back-end
* PHP → Desenvolvimento Web

---

# 🧠 Desafio

## Calculadora de Áreas

Crie um menu:

```txt
1 - Quadrado
2 - Retângulo
3 - Triângulo
4 - Círculo
```

De acordo com a opção escolhida:

* Solicite as medidas necessárias.
* Calcule a área correspondente.
* Exiba o resultado.

> [!TIP]
> Utilize um `switch` para escolher a figura e, dentro de cada `case`, solicite apenas os dados necessários.

---

# 💡 Dica de Programador

O `switch` deixa o código mais organizado quando várias ações dependem de uma única variável. Menus, comandos, estados e opções de sistemas são situações em que essa estrutura aparece com frequência.

Entretanto, ele não substitui o `if`. Sempre que houver comparações envolvendo intervalos (`>`, `<`, `>=`, `<=`) ou condições compostas com `&&` e `||`, o `if` continua sendo a melhor escolha.
