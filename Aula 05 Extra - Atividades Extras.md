# ➕ Exercícios Extras — Aula 5: Estruturas Condicionais Encadeadas e Aninhadas

# 🟢 Exercícios Extras — Nível Básico

## Exercício 6 — Classificação de Nota por Conceito

Solicite a nota de um aluno de **0 a 10**.

Exiba:

* Nota maior ou igual a 9 → **Conceito A**
* Nota maior ou igual a 7 → **Conceito B**
* Nota maior ou igual a 5 → **Conceito C**
* Abaixo de 5 → **Conceito D**

### Exemplo:

```txt
Digite a nota: 8
Conceito B
```

---

## Exercício 7 — Verificação de Número

Solicite um número inteiro e informe:

* Se ele é **positivo**, **negativo** ou **zero**
* E também se ele é **par** ou **ímpar**

### Exemplo:

```txt
Digite um número: -7
Número negativo e ímpar
```

---

## Exercício 8 — Maior entre Três Números

Peça três números e informe qual é o maior deles.

### Exemplo:

```txt
Digite o primeiro número: 8
Digite o segundo número: 12
Digite o terceiro número: 5

Maior número: 12
```

---

## Exercício 9 — Ano Bissexto (versão simplificada)

Solicite um ano e informe se ele é **bissexto** ou **não bissexto**.

> Regra simplificada para esta atividade:
> Se o ano for divisível por 4, considere bissexto.

### Exemplo:

```txt
Digite o ano: 2024
Ano bissexto
```

---

# 🟡 Exercícios Extras — Nível Intermediário

## Exercício 10 — Cálculo de Imposto

Solicite o salário de um funcionário.

Aplicar:

* Até R$ 2.000 → isento
* Até R$ 4.000 → 7,5%
* Até R$ 6.000 → 15%
* Acima de R$ 6.000 → 22%

Mostrar:

* salário informado
* percentual aplicado
* valor do imposto
* salário líquido

---

## Exercício 11 — Tipo de Eleitor

Solicite a idade da pessoa e informe:

* Menor de 16 → **Não vota**
* 16 ou 17 → **Voto facultativo**
* 18 a 69 → **Voto obrigatório**
* 70 ou mais → **Voto facultativo**

---

## Exercício 12 — Login com Nível de Acesso

Solicite:

* usuário
* senha
* nível de acesso (`1`, `2` ou `3`)

Regras:

Se usuário e senha estiverem corretos:

* nível 1 → **Acesso básico**
* nível 2 → **Acesso intermediário**
* nível 3 → **Acesso administrador**

Caso usuário ou senha estejam errados:

* mostrar **Usuário ou senha inválidos**

---

## Exercício 13 — Cálculo de Frete

Solicite o valor da compra e a região de entrega:

* `"sul"`
* `"sudeste"`
* `"centro-oeste"`
* `"nordeste"`
* `"norte"`

Regras:

Se a compra for acima de **R$ 200**, o frete é grátis.
Caso contrário:

* Sul → R$ 20
* Sudeste → R$ 25
* Centro-Oeste → R$ 30
* Nordeste → R$ 35
* Norte → R$ 40

Mostrar valor da compra, região e valor do frete.

---

# 🟠 Exercícios Extras — Nível Intermediário/Avançado

## Exercício 14 — Sistema de Desconto por Cliente VIP

Solicite:

* valor da compra
* se o cliente é VIP (`true` ou `false`)

Regras:

Se for VIP:

* até R$100 → 5%
* até R$300 → 10%
* acima de R$300 → 15%

Se **não** for VIP:

* até R$100 → sem desconto
* até R$300 → 5%
* acima de R$300 → 10%

Mostrar:

* tipo do cliente
* percentual aplicado
* valor final

---

## Exercício 15 — Pode Fazer a Prova?

Solicite:

* nome do aluno
* percentual de frequência
* se entregou o trabalho final (`true` ou `false`)

Regras:

Se a frequência for menor que 75%:

```txt
Aluno impedido de fazer a prova final por falta
```

Se a frequência for suficiente:

* Se entregou o trabalho final → **Pode fazer a prova**
* Caso contrário → **Não pode fazer a prova, trabalho pendente**
