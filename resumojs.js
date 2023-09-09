//maneiras de programação: precedural(estruturada), orientação a objetos,  funcional.

////////////////////////////////////////////////////////////////////////////////////////////

// resumojs.js

//função javscript normal

function soma(num1, num2){
    return num1 + num2
}

total = soma(2, 3)
console.log('Resultado soma: ', total)

//função através do arrow function
const somaArrow = (num1, num2) => {
    return num1 + num2
}

totalArrow = somaArrow(3,4)
console.log('Resultado da somaArrow ', totalArrow)

//declarando Arrays
const arrInteiros = [1,2,3,4,5,6,7,8,9,10,11]
const arrString = ['Ariel','Rafel','Manuel']
const arrMisto = [1,2,3,'Rafael', 'Miguel', 'Manuel']

console.log ('\Percorrendo o array com FOR convencional')
for (let i=0; i<arrMisto.length; i++){
    console.log(arrMisto[i])
}

console.log('\nPercorrendo o array FOR EACH')
arrMisto.forEach((item) => {
    console.log(item)
})

console.log('\Percorrendo um array com map')
arrInteiros.map(item => {
    console.log(item)
})

console.log('\nRetornando o array alterado com map')
novoArr = arrInteiros.map((item) => {
    return item +2
})
console.log(novoArr)

//criando objeto JS
const pessoa1 = {
    //propriedade : valor
    nome: 'Rafael',
    idade: 21, 
    altura: 1.7
}
console.log ('Idade do Rafael: ', pessoa1.idade)

const pessoa2 = {
    nome: 'Gabriel',
    idade: 17,
    altura: 1.6
}

const pessoa3 = {
    nome: 'Maria',
    idade: 19,
    altura: 1.8
}
const pessoa4 = {
    nome: 'Manoel',
    idade: 18,
    altura: 1.9
}

//array de objetos
const pessoas = [pessoa1, pessoa2, pessoa3, pessoa4]
console.log(pessoas)
console.log(pessoas[0].nome)

//adicionando pessoa1 no final do array misto
arrMisto.push(pessoa1)
console.log(arrMisto)

//removendo o item da ultima posição do array
arrMisto.pop()
console.log(arrMisto)   //removeu pessoa1

//removendo o item da primeira posição do array
arrMisto.shift()
console.log(arrMisto)  //removeu 1

//removendo itens intermidiarios do array
arrMisto.splice(1, 3)   //posiçao, quantidade_elementos_para_remover
console.log (arrMisto)  // a partir do item 1 removeu 3 itens

// filtrar dados => filtrar por idade
console.log ('\nFiltrando por idade')
const maiores = pessoas.filter ((pessoa) => pessoa.idade >= 18)
console.log(maiores)

//removendo pelo nome
const indice = pessoas.findIndex((pessoa) => pessoa.nome === 'Rafael');
pessoas.splice(indice, 1)
console.log(pessoas)

//verificando se TODAS as pessoas são maiores de 18 retornando
const todasAsPessoasSaoMaiores = pessoas.every((pessoa) => pessoa.idade >=18)
console.log(todasAsPessoasSaoMaiores)    //false

//VERIFICA SE alguma pessoa é maior de 18
const algumaPessoaMaior =  pessoas.some((pessoa) => pessoa.idade >= 18)
console.log(algumaPessoaMaior)     //true

// soma todas as idades
const somaIdades = pessoas.reduce((total, pessoa) => {
    return total + pessoa.idade
} , 0) // 0 = valor inicial de total
console.log ('Soma das idades: ', somaIdades)

