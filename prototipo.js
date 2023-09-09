// Assunto: prototype do javascript
//Protótipo é um mecanismo pelo qual os objetos JS herdam recursos uns dos outros

const objPessoa = {
    //propriedade
    nome: 'James Bond',

    //função 
    apresentarse () {
        console.log (`Olá! Eu sou ${this.nome}`)
    },

    //sobescrita da função herdada do prototype
    toString(){
        return 'objeto pessoa'
    }
}

console.log(objPessoa.nome)
objPessoa.apresentarse()

//imprime o objeto 
console.log(objPessoa.toString())

///////////////////////////////////////////////////////////////
//criando um prototipo de pessoa para servir de objeto 
const pessoaPrototype1 = {
    apresentarse(){
        console.log(`Olá, tudo bem?!`)
    }
}


const pessoaPrototype2 = {
    apresentarse() {
        console.log (`Olá! Eu sou ${this.nome}`) //contém uma variavel do objeto 
    }
}


// Metodo 1. criando uma cópia de pessoaPrototype atraves de Object.create
const joao = Object.create(pessoaPrototype1)
joao.apresentarse() 

//Método 2. criando uma cópia de pessoaPrtotype2 atraves de Object.assign com uma função construtora
function Pessoa(nome){
    this.nome = nome
    //aqui será incluido a função apresentarse() por Object.assign()
}

Object.assign(Pessoa.prototype, pessoaPrototype2)

//finalmente criamos um objeto usando a função construtora Pessoa() que terá o método apresentarse()
const neo = new Pessoa ('Thomas Anderson')
neo.apresentarse()

