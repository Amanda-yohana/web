console.log ("Hello World")
console.warn ("Este é um warning")
console.error("deu um erro aqui")

console.time()
console.log("Marca o tempo de execução desta linha")
console.timeEnd ()

//          0     1       2
array = ["Audi", "Volvo", "Ford"]
console.table(array)


// Tipos de variaveis de JS
//primitivas : número, texto (string) e boleanos (V OU F)

const primeiroNumero = 1
const segundoNumero = 2

const somaNumeros = primeiroNumero + segundoNumero
console.log ('Soma: ' + somaNumeros)
console.log (typeof somaNumeros)
console.log (typeof "texto")

const pontoFlutuante = 3.14
console.log (pontoFlutuante)
const pontoFlutuanteSemZero = .9
const divisao = pontoFlutuante / pontoFlutuanteSemZero
console.log ('Divisão: '+ divisao)

const texto = 'qualquer coisa'
console.log (texto * 3)

console.log (1/0)
console.log (-1/0)

const infinito = 1/0
const menosInfinito = -1/0
console.log (infinito + menosInfinito)


//arredondamento de valores
const valorHora = 99.55
console.log ('Arredondamento para cima: '+ valorHora.toFixed(2))
console.log ('Arredondamento para inteiro mais próximo '+ Math.round(valorHora))
console.log ('O maior número inteiro: '+ Math.floor(valorHora))
console.log ("O maior número inteiro: " + Math.ceil(valorHora))

// formatação de moeda (currency)
const formatado = valorHora.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
console.log ('Formatado: ' + formatado)











