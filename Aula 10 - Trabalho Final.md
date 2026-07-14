# 🎮 Trabalho Final — "A Jornada do Herói"

### História

Você foi contratado para desenvolver um pequeno RPG em modo texto (Terminal) utilizando JavaScript.

O jogador controlará um herói que deverá sobreviver a uma aventura enfrentando inimigos, coletando itens e evoluindo seu personagem.

Todo o jogo deve funcionar pelo terminal utilizando **readline-sync**.

---

# Objetivos

O sistema deve utilizar os principais conceitos aprendidos durante a disciplina.

## O jogo deve possuir:

### ✔ Cadastro do personagem

Perguntar:

* Nome
* Classe

Utilizar **switch** para definir atributos iniciais.

Exemplo:

```
Guerreiro
Vida: 120
Ataque: 18

Mago
Vida: 80
Ataque: 25

Arqueiro
Vida: 100
Ataque: 20
```

---

### ✔ Inventário

Criar um array inicialmente vazio.

Durante o jogo o jogador poderá encontrar itens.

Exemplo:

```
Espada
Poção
Arco
Escudo
Mapa
```

Utilizar:

* push
* pop
* shift
* unshift
* splice

Em situações diferentes do jogo.

---

### ✔ Menu principal

Utilizar um **while**.

```
1 - Explorar
2 - Ver status
3 - Inventário
4 - Descansar
5 - Sair
```

---

### ✔ Explorar

Ao explorar, gerar um evento aleatório.

Exemplo:

```
Encontrou um inimigo

Encontrou um baú

Encontrou uma poção

Nada aconteceu

Armadilha
```

Pode utilizar:

```
Math.random()
```

---

### ✔ Combate

Quando encontrar um inimigo:

```
Goblin
Orc
Esqueleto
Dragão
```

Criar objetos para representar os inimigos.

Exemplo:

```js
{
    nome: "Goblin",
    vida: 30,
    ataque: 8
}
```

Enquanto o inimigo estiver vivo:

```
1 - Atacar
2 - Fugir
```

Utilizar **while**.

---

### ✔ Sistema de dano

Criar funções.

Exemplo:

```js
atacar()

receberDano()

curar()

mostrarStatus()
```

---

### ✔ Inventário

Mostrar os itens utilizando:

* for...of

ou

* forEach

---

### ✔ Missões

Criar um array de objetos.

Exemplo:

```js
[
    {
        nome: "Derrote 3 Goblins",
        concluida: false
    },
    {
        nome: "Encontrar um Escudo",
        concluida: false
    }
]
```

Percorrer utilizando **for...in** ou **forEach**.

---

### ✔ Status

Mostrar:

```
Nome

Classe

Vida

Ataque

Quantidade de itens

Missões concluídas
```

---

### ✔ Game Over

Caso a vida seja menor ou igual a zero.

Mostrar:

```
GAME OVER
```

---

### ✔ Vitória

Caso todas as missões sejam concluídas.

Mostrar:

```
PARABÉNS!

Você concluiu a aventura!
```

---

# Conteúdos obrigatórios

O projeto deve utilizar:

✅ Variáveis

✅ Constantes

✅ readline-sync

✅ if/else

✅ switch

✅ while

✅ for

✅ for...in

✅ for...of

✅ Arrays

✅ push

✅ pop

✅ shift

✅ unshift

✅ splice

✅ forEach

✅ Objetos

✅ Funções

---

# Regras

* Todo o jogo deve ser executado no terminal.
* O código deve estar organizado em funções.
* Não utilizar bibliotecas além do `readline-sync`.
* O jogo deve permitir várias ações até que o jogador vença, perca ou escolha sair.

---

# ⭐ Desafios Extras (vale pontos bônus)

* Sistema de experiência (XP) e níveis.
* Loja para comprar itens com ouro.
* Chefão final.
* Sistema de equipamentos (arma, armadura e acessório).
* Críticos e esquiva durante o combate.
* Sistema de conquistas.

---

## 📊 Critérios de avaliação (100 pontos)

| Critério                                                                       | Pontos |
| ------------------------------------------------------------------------------ | -----: |
| Funcionamento do jogo                                                          |     20 |
| Uso correto de variáveis e constantes                                          |      5 |
| Estruturas de decisão (`if/else` e `switch`)                                   |     10 |
| Estruturas de repetição (`for`, `while`, `for...in`, `for...of`)               |     20 |
| Manipulação de arrays (`push`, `pop`, `shift`, `unshift`, `splice`, `forEach`) |     15 |
| Uso de objetos                                                                 |     10 |
| Organização em funções                                                         |     10 |
| Clareza do código (indentação, nomes de variáveis e comentários)               |     10 |
