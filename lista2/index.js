const prompt = require("prompt-sync")()

// Seção 1: Estruturas de Controle Avançadas

// 1. Validação de Datas
// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
// formarem uma data real (meses de 28–31 dias, ano bissexto para
// fevereiro) e false caso contrário.

/*function ehDataValida(dia, mes, ano) {
  dia = Number(dia);
  mes = Number(mes);
  ano = Number(ano);

  if (isNaN(dia) && isNaN(mes) && isNaN(ano)) {
    console.log("Você não digitou números")
    return
  }

  let data = new Date(ano, mes, dia)

  if (
    data.getDate() === dia &&
    data.getMonth() === mes &&
    data.getFullYear() === ano
  ) {
    console.log("Data válida")
  } else {
    console.log("Data inválida")
  }
}

ehDataValida("12", 8, "1988"); // Data válida
ehDataValida("asd", 1, 2025); // Data inválida
ehDataValida(31, 1, 2025); // Data inválida*/


// 2. Jogo de Adivinhação
// Escreva um script que gere um número aleatório de 1 a 100 e peça ao
// usuário, para adivinhar. Use while para repetir até acertar, contando
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

/*function randomNumber() {
  let randomNum = Math.floor(Math.random() * 100)
  let userResponse = +(prompt("Adivinhe qual é o número: "))
  let tries = 1

  while (userResponse !== randomNum) {
    console.log(randomNum)
    console.log(userResponse)
    if (userResponse > randomNum) {
      console.log("Mais baixo")
    } else if (userResponse < randomNum) {
      console.log("Mais alto")
    }
    userResponse = +(prompt("Adivinhe qual é o número: "))
    tries++
  }

  console.log(`Parabéns, você acertou! O número era ${randomNum}.`)
  console.log(`Número de tentativas: ${tries}`)
}

randomNumber()
*/


// 3. Palavras Únicas
// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
// todas as palavras únicas e exibi-las em um array.

/*function singleWord(frase) {
  let words = frase.split(" ")
  let singleWords = []

  for (let i = 0; i < words.length; i++) {
    let count = 0
    for (let j = 0; j < words.length; j++) {
      if (words[i] === words[j]) {
        count++
        if (count > 1) {
          break
        }
      }
    }
    if (count === 1) {
      singleWords.push(words[i])
    }
  }

  return console.table(singleWords)
}

singleWord("olá olá mundo mundo tche gremio inter inter emily gabriel luiz luiz")
*/


// Seção 2: Funções e Recursão

// 4. Fatorial Recursivo
// Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando
// um Error, e n === 0 retornando 1.

/*function fatorial(n) {
  if (n === 0) return 1
  if (n < 0) throw new RangeError("Não pode ser menor que 0")
  return n * fatorial(n - 1)
}

console.log(fatorial(5))*/


// 5. Debounce
// Crie function debounce(fn, delay) que receba uma função fn e um delay
// em ms, retornando uma nova função que só executa fn se não for
// chamada novamente dentro do intervalo.


// 6. Memoization
// Implemente function memoize(fn) que armazene em cache chamadas
// anteriores de fn (por argumentos), retornando resultados instantâneos em
// repetidas invocações.

/*function memorize(fn) {
  const cache = new Map()

  return function (...args) {
    const key = JSON.stringify(args)

    if (cache.has(key)) {
      return cache.get(key)
    }

    const result = fn.apply(this, args)
    cache.set(key, result)
    return result
  }
}

function fibonacci(n) {
  if (n < 2) return n
  return fibonacci(n - 1) + fibonacci(n - 2)
}

const fastFib = memorize(function fibonacci(n) {
  if (n < 2) return n
  return fastFib(n - 1) + fastFib(n - 2)
})

console.log(fibonacci(30))
console.log(fastFib(30))
*/

// Seção 3: Arrays e Objetos Complexos

// 7. Mapeamento e Ordenação
// Dado um array produtos = [{ nome, preco }, …], crie uma função que
// retorne um novo array apenas com os nomes, ordenados por preço
// crescente, usando map, sort.
// const products = [
//   { name: "Tênis", price: 299.99 },
//   { name: "Bota", price: 499.99 },
//   { name: "Chinelo", price: 49.99 },
//   { name: "Pantufa", price: 39.99 },
//   { name: "Sandália", price: 59.99 }
// ]

// function arrayOrderByPrice(array) {
//   return array
//     .slice()
//     .sort((a, b) => a.price - b.price)
//     .map(p => p.name)
// }

// console.log(arrayOrderByPrice(products))


// 8. Agrupamento por Propriedade
// Em vendas = [{ cliente, total }, …], use reduce para gerar um objeto onde
// cada chave é um cliente e o valor é a soma de todos os seus total.
// let vendas = [
//   { cliente: "Joao", total: 200 },
//   { cliente: "Pedro", total: 150 },
//   { cliente: "Carlos", total: 3.50 },
//   { cliente: "Maria", total: 2500 },
//   { cliente: "Catarina", total: null },
//   { cliente: "Vicente", total: undefined }
// ]

// const vendasPorCliente = vendas.reduce((acc, venda) => {
//   acc[venda.cliente] = (acc[venda.cliente] || 0) + (typeof venda.total === "number" ? venda.total : 0)
//   return acc
// }, {})

// console.log(vendasPorCliente)


// 9. Conversão Entre Formatos
// Escreva duas funções:
// ○ paresParaObjeto(pares) recebe um array de pares [ [chave,
// valor], … ] e retorna o objeto equivalente.
// ○ objetoParaPares(obj) faz o inverso, retornando um array de
// pares.
// let arrayPares = [
//   [1, 2],
//   ["3", "4"],
//   [false, true],
//   [7, 8],
//   [9, 10],
//   ["Cliente", "Pafúncio"],
//   [4, "Tri Campeão"]
// ]

// function paresParaObjeto(array) {
//   return array.reduce((acc, arr) => {
//     acc[arr[0]] = arr[1]
//     return acc
//   }, {})
// }

// function objetosParaPares(object) {
//   return Object.entries(object)
// }

// let objPares = paresParaObjeto(arrayPares)
// console.log(objPares)
// console.log(objetosParaPares(objPares))
