# Atividade Avaliativa III - Prática

* Curso - Desenvolvimento de Sistemas
* Unidade Curricular - Lógica de Programação
* Docente - Gustavo Roberto de Souza

## Orientações Gerais

* A avaliação deverá ser realizada individualmente.
* Não é permitido o uso do celular durante a realização da atividade.
* Não é permitido o uso de nenhum tipo de auxílio de IA (Inteligência Artificial).
* Conceitos de entrada e saída de dados, variáveis, operadores, estruturas condicionais e estruturas de repetição.
* Não deverá ser utilizado vetor, array, lista, matriz ou objeto para armazenar os dados.
* A entrega deverá ser feita no AVA, enviando apenas o link do repositório do GitHub.

## Passo-a-Passo (Clonar e Entrega)

1. Você deve fazer um fork deste repositório. Na parte superior da página, clique no botão de **Fork**.
2. Depois disso, você deve clonar o repositório para o seu computador utilizando o seguinte comando:

   1. Selecione uma pasta no computador.
   2. Abra o CMD (Terminal).
   3. Execute o comando `git clone <url_do_repositório>`.

3. Abra no VS Code a pasta do projeto.
4. Desenvolva os exercícios.
5. Ao finalizar, você deverá commitar e enviar novamente para o GitHub suas modificações.

   1. Adicione as alterações ao stage utilizando o comando `git add .`.
   2. Faça o commit utilizando o comando `git commit -m "sua mensagem"`.
   3. Envie as alterações utilizando o comando `git push origin master`.

6. Por fim, copie o link do seu repositório e faça o envio no AVA.

   1. O link deverá ser adicionado como comentário na entrega da atividade.

## Questões

### Questão 01

Uma escola deseja analisar as notas de uma turma.

Desenvolva um algoritmo que solicite ao usuário a quantidade de estudantes que serão analisados.

Para cada estudante, o programa deverá solicitar uma nota entre `0` e `10`.

Ao final, o programa deverá apresentar:

* Quantidade de estudantes com nota maior ou igual a `7`.
* Quantidade de estudantes com nota menor que `7`.
* Soma de todas as notas.
* Média das notas da turma.

---

### Questão 02

Uma loja deseja registrar o valor das compras realizadas durante o dia.

Inicialmente, o programa deverá solicitar quantas compras serão registradas.

Para cada compra, solicite o valor pago pelo cliente.

Ao final, o programa deverá apresentar:

* Quantidade de compras realizadas.
* Valor total vendido.
* Média de valor das compras.
* Quantidade de compras com valor maior que `R$ 100,00`.

---

### Questão 03

Desenvolva um programa para realizar uma contagem utilizando valores informados pelo usuário.

O programa deverá solicitar:

* Um número inicial.
* Um número final.

Em seguida, o programa deverá apresentar todos os números existentes entre o número inicial e o número final.

Além disso, ao final deverá informar:

* Quantos números foram apresentados.
* Quantos números são pares.
* Quantos números são ímpares.

Exemplo:

```text
Número inicial: 3
Número final: 8

3
4
5
6
7
8

Quantidade de números: 6
Pares: 3
Ímpares: 3
```

---

### Questão 04

Uma pequena loja deseja desenvolver um sistema para registrar a venda de produtos.

O programa deverá apresentar repetidamente o seguinte menu:

```text
1 - Água - R$ 4,00
2 - Refrigerante - R$ 7,00
3 - suco - R$ 6,00
0 - Finalizar
```

Sempre que o usuário escolher um produto, o valor correspondente deverá ser adicionado ao total da compra.

O menu deverá continuar sendo apresentado até que seja informada a opção `0`.

Ao finalizar, apresente:

* Quantidade total de produtos comprados.
* Valor total da compra.
* Quantidade de refrigerantes comprados.

Caso seja informada uma opção inválida, apresente:

```text
Opção inválida.
```

A opção inválida não deverá ser contabilizada.

---

### Questão 05

Um programa deverá solicitar números inteiros ao usuário repetidamente.

A leitura deverá continuar até que o usuário informe o número `0`.

O número `0` deverá servir apenas para finalizar o programa e não deverá ser contabilizado.

Ao final, apresente:

* Quantidade de números informados.
* Soma dos números informados.
* Quantidade de números positivos.
* Quantidade de números negativos.

Exemplo:

```text
Digite um número: 10
Digite um número: -3
Digite um número: 5
Digite um número: -2
Digite um número: 0

Quantidade de números: 4
Soma: 10
Positivos: 2
Negativos: 2
```
