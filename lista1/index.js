const prompt = require("prompt-sync")()

// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.
// let num = +(prompt("Digite um número: "))
// if (num % 2 === 0) {
//   console.log("Número par!")
// } else {
//   console.log("Número impar!")
// }


// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//   adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//   controle if-else.
// let idade = +(prompt("Digite sua idade: "))
// if (idade >= 60) {
//   console.log("Você é idoso")
// } else if (idade >= 18) {
//   console.log("Você é adulto")
// } else if (idade >= 12) {
//   console.log("Você é adolescente")
// } else {
//   console.log("Você é criança")
// }


// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
// let nota = +(prompt("Digite a nota (0-10): "))
// if (nota >= 7) {
//   console.log("Aprovado!")
// } else if (nota >= 6) {
//   console.log("Recuperação!")
// } else {
//   console.log("Reprovado!")
// }


// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.
// let option = prompt("Qual forma de pagamento?\n1) Débito; 2) Crédito; 3) Pix\n")
// switch (option) {
//   case "1":
//     console.log("Débito selecionado!")
//     break;
//   case "2":
//     console.log("Crédito selecionado!")
//     break;
//   case "3":
//     console.log("Pix selecionado!")
//     break;
//   default:
//     console.log("Opção inválida!")
//     break;
// }


// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.
// const peso = +(prompt("Digite seu peso (kg): "))
// const altura = +(prompt("Digite sua altura (m): "))
// const imc = peso / (altura * altura)
// if (imc >= 30) {
//   console.log("Obesidade")
// } else if (imc >= 25) {
//   console.log("Sobrepeso")
// } else if (imc >= 18) {
//   console.log("Peso normal")
// } else {
//   console.log("Baixo peso")
// }


// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo equilátero: possui todos os lados iguais (A=B e B=C)
// let a = +(prompt("Digite o valor do lado do triângulo: "))
// let b = +(prompt("Digite o outro valor do lado do triângulo: "))
// let c = +(prompt("Digite o outro valor do lado do triângulo: "))
// if ((a < b + c) && (b < a + c) && (c < a + b)) {
//   if ((a === b) && (b === c)) {
//     console.log("Triângulo equilátero")
//   } else if ((a !== b) && (b !== c)) {
//     console.log("Triângulo escaleno")
//   } else if ((a === b) || (a === c) || (b === c)) {
//     console.log("Triângulo isósceles")
//   }
// } else {
//   console.log("Não é triângulo")
// }


// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.
// let applesQuantity = +(prompt("Quantas maças você vai comprar? "))
// let total
// if (applesQuantity >= 12) {
//   total = applesQuantity * 0.25
//   console.log(`Total da compra: R$${total}`)
// } else {
//   total = applesQuantity * 0.30
//   console.log(`Total da compra: R$${total}`)
// }


// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.
// let value1 = +(prompt("Digite um número: "))
// let value2 = +(prompt("Digite outro número: "))
// value1 > value2 ? console.log(`${value2}, ${value1}`) : console.log(`${value1}, ${value2}`)


// 9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
// utilizando um loop for.
// for (let i = 10; i >= 1 ; i--) {
//   console.log(i)  
// }


// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
// let num = prompt("Digite um número: ")
// for (let i = 1; i <= 10; i++) {
//   console.log(`${i}) ${num}`)  
// }


// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.
// let num = 0
// let total = 0
// for (let i = 1; i <= 5; i++) {
//   num = +(prompt(`Digite o ${i}° número: `))
//   total += num
// }
// console.log(`Total: ${total}`)


// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário 
// (de 1 a 10) utilizando um loop for.
// const num = +(prompt("Digite um número e descubra sua tabuada: "))
// for (let i = 1; i <= 10; i++) {
//   console.log(`${i} X ${num} = ${i * num}`)
// }


// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.
// let num
// let media = 0
// let total = 0
// do {
//   num = +(prompt("Digite um número: "))
//   if (num === 0) {
//     break
//   } else {
//     media++
//     total += num
//   }
// } while (num !== 0);
// media > 0 ? console.log(`Total: ${total / media}`) : console.log(`Total: 0`)


// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.
// let num = +(prompt("Digite um número: "))
// let total = 1
// if (num === 0) {
//   console.log("Fatorial: 1")
// } else if (num < 0) {
//   console.log("Não existe fatorial de número negativo!");
// } else {
//   for (let i = 2; i <= num ; i++) {
//     total *= i
//   }
// }
// console.log(`Fatorial: ${total}`)


// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.
// let a = 0 
// let b = 1 
// let next
// console.log("Os primeiros 10 números da sequência de Fibonacci são:");
// console.log(a);
// console.log(b);
// for (let i = 2; i < 10; i++) {
//   next = a + b;
//   console.log(next);
//   a = b;
//   b = next;
// }