# 🚀 Aula 2 — Introdução à Lógica de Programação com JavaScript

## 🎯 Objetivos da Aula

Ao final da aula deverão ser capazes de:

- Entender o que é programação e lógica de programação;
- Compreender o que é o JavaScript;
- Conhecer ferramentas básicas de desenvolvimento;

- Instalar:
  - Visual Studio Code
  - Node.js
  - Git Bash

- Criar e executar o primeiro programa em JavaScript;
- Utilizar:
  - variáveis
  - constantes
  - entrada e saída simples.

---

# 🧠 O que é Programação?

Programação é o processo de criar instruções para que o computador execute tarefas.

O computador não “pensa”.
Ele segue instruções de forma extremamente rápida.

Essas instruções são escritas utilizando linguagens de programação.

---

# 🧩 O que é Lógica de Programação?

Lógica de programação é a forma de organizar pensamentos e passos para resolver problemas.

Antes de aprender qualquer linguagem, precisamos aprender a pensar como programadores.

---

## 📌 Exemplo do dia a dia

### Fazer café ☕

1. Pegar a água;
2. Colocar no filtro;
3. Adicionar pó;
4. Ligar a cafeteira;
5. Esperar;
6. Servir.

Isso é um algoritmo:
uma sequência lógica de passos.

---

# 🌐 O que é JavaScript?

JavaScript é uma linguagem de programação criada em 1995 por `Brendan Eich`.

Originalmente ela foi criada para deixar páginas web interativas.

Antes do JavaScript, os sites eram praticamente “parados”.

---

## 🕰️ Curiosidade Histórica

O JavaScript foi criado em apenas **10 dias** 😅

Inicialmente ele se chamava:

- Mocha
- depois LiveScript
- depois JavaScript

O nome “JavaScript” foi escolhido por marketing, aproveitando a popularidade do Java na época.

> [!NOTE]
> Apesar do nome parecido:   
>   
> Java ≠ JavaScript

São linguagens completamente diferentes.

---

# 💡 Por que aprender JavaScript?

JavaScript é uma das melhores linguagens para começar porque:

✅ Sintaxe relativamente simples   
✅ Resultado visual rápido   
✅ Funciona no navegador   
✅ Funciona no backend   
✅ Grande mercado de trabalho   
✅ Comunidade enorme   
✅ Muitas bibliotecas e frameworks   

---

# 🌎 Onde o JavaScript é usado?

## Front-end (parte visual)

Sites e interfaces.

Exemplos:

- Netflix
- Discord
- Facebook
- YouTube

---

## Back-end (servidor)

Com `Node.js` o JavaScript também pode criar:

- APIs;
- sistemas;
- servidores;
- automações;
- bots;
- aplicações em tempo real.

---

## Mobile

Com frameworks como:

- `React Native`

É possível criar aplicativos `Android` e `iOS`.

---

## Desktop

Com:

- `Electron`

É possível criar programas desktop.

Exemplos:

- Visual Studio Code
- Discord

---

# ⚛️ Tecnologias Derivadas do JavaScript

## React

Biblioteca para criação de interfaces modernas.

Muito usada no mercado.

---

## Vue.js

Framework leve e simples.

Muito popular.

---

## Angular

Framework completo criado pela Google.

---

# 🛠️ Ferramentas da Aula

Hoje vamos utilizar:

| Ferramenta |        Função         |
|:----------:|:---------------------:|
|  VS Code   |   Editor de código    |
|  Node.js   |  Executar JavaScript  |
|  Git Bash  |       Terminal        |
| Navegador  | Visualizar resultados |

---

# 💻 Instalando as Ferramentas

## 1️⃣ Instalar o VS Code

### Download:

[VS Code Oficial](https://code.visualstudio.com/?utm_source=chatgpt.com)

### Passos

- Baixar instalador;
- Próximo → Próximo → Instalar;

---

# 🟢 Instalar Node.js

## Download:

[Node.js Oficial](https://nodejs.org/?utm_source=chatgpt.com)

Instalar a versão **LTS**.

---

## Verificando instalação

Abrir terminal:

```bash
node -v
```

E:

```bash
npm -v
```

---

# ⚫ Instalar Git Bash

## Download:

[Git Oficial](https://git-scm.com/downloads?utm_source=chatgpt.com)

---

# 📂 Criando a Primeira Pasta do Projeto

## No terminal

```bash
mkdir aula-js
```

```bash
cd aula-js
```

---

# 🚀 Abrindo no VS Code

No terminal:

```bash
code .
```

> O ponto (`.`) significa “abrir a pasta atual”.

---

# 📄 Criando o Primeiro Arquivo

Criar arquivo:

```txt
index.js
```

---

# 🎉 Primeiro Código JavaScript

```js
console.log('Olá mundo!');
```

---

# ▶️ Executando o Código

No terminal:

```bash
node index.js
```

Resultado:

```txt
Olá mundo!
```

---

# 🧠 O que é `console.log()`?

Serve para mostrar informações no terminal.

Muito usado para:

- testes;
- debug;
- mensagens;
- visualizar variáveis.

---

# 📦 Variáveis

Variáveis guardam informações.

---

## Exemplo

```js
let nome = 'Daniel';

console.log(nome);
```

---

# 🔒 Constantes

Constantes são valores que não mudam.

---

## Exemplo

```js
const pi = 3.14;

console.log(pi);
```

---

# 📌 Diferença entre `let` e `const`

|    let     |     const      |
|:----------:|:--------------:|
| Pode mudar | Não pode mudar |
|  Variável  |   Constante    |

---

# 🔢 Tipos de Dados Básicos

## Texto

```js
let nome = 'Maria';
```

---

## Número

```js
let idade = 20;
```

---

## Booleano

```js
let aprovado = true;
```

---

# 🧪 Exemplos Práticos

## Exemplo 1

```js
let nome = 'João';
let idade = 18;

console.log(nome);
console.log(idade);
```

---

## Exemplo 2

```js
const cidade = 'São Leopoldo';

console.log('Cidade:', cidade);
```

---

# ⚠️ Erros fazem parte da programação

Todo programador erra.

Inclusive muito 😅

Erros ajudam a aprender.

O importante é:

- testar;
- ler mensagens;
- investigar;
- praticar.

---

# 🏗️ Estrutura Básica da Programação

Quase todo programa possui:

| Entrada | Processamento |   Saída   |
|:-------:|:-------------:|:---------:|
|  Dados  |    Regras     | Resultado |

---

# 🎯 Exercícios Simples

## Exercício 1

Crie variáveis para:

- nome;
- idade;
- cidade.

E exiba no terminal.

---

## Exercício 2

Crie uma constante chamada `curso`.

Exiba:

```txt
Estou estudando Técnico em Desenvolvimento de Sistemas
```

---

## Desafio Extra ⭐

Crie um mini “perfil” com:

* nome;
* idade;
* cidade;
* comida favorita;
* jogo favorito;
* linguagem que está aprendendo.

Exiba tudo organizado no terminal usando vários `console.log()`.

Exemplo:

```txt
===== PERFIL =====
Nome: Rodorlfo
Cidade: São Leopoldo
Jogo Favorito: Minecraft
```

---

# 📚 Dicas

✅ Praticar diariamente   
✅ Errar faz parte   
✅ Pesquisar é obrigatório   
✅ Programação é prática   
✅ Copiar sem entender não ajuda 😅   
