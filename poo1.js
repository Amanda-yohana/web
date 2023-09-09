//programação orientada a objetos com javascript

//função construtoraque possui duas proriedades

function Personagem(nome, frase) {
    this.nome = nome
    this.frase = frase

}

// depois adicionamos a função falar ao prototipo da construtora 
Personagem.prototype.falar = function(){
    console.log(`\nOlá! Eu sou ${this.nome}!`)
    console.log(`"${this.frase}"`)
}

//e finalmente criamos os objetos usando o operador new
optimus = new Personagem('Optimus Prime', 'Sem sacrifício não há vitória')
optimus.falar()

//outro exemplo
tioDoPeterParker = new Personagem('Tio Bem', 'Com grandes poderes vem grandes responsabilidades')
tioDoPeterParker.falar()

//===============Programação Orientada à Objetos Usando Classes=====================

//1- Declarando um classe
class Retangulo {

    //função construtora ou construtor da classe
    constructor (largura, altura) {
        this.largura = largura
        this.altura = altura
    }
}

//agora irá ser criado um objeto 
const quadrado = new Retangulo(50, 50)
console.log(`Quadrado largura: ${quadrado.largura}`)
console.log(`Quadrado altura: ${quadrado.altura}`)

//outro objeto
const retang = new Retangulo(100, 50)
console.log(`Retangulo largura: ${retang.largura}`)
console.log(`Retangulo altura: ${retang.altura}`)


//criando oiutra classe
class Cliente {
    constructor (nome, email){
    this.nome = nome
    this.email = email
    }
//possui uma função ou metodo interno
exibir(){
    console.log(`\nCliente: ${this.nome} \tE-mail:${this.email}`)

    }
}

//agora cria o objeto a partir da classe Cliente
const lojaJS = new Cliente('Loja JS', 'lojajs@gmail.com')
lojaJS.exibir()

//adicionando métodos a uma classe
class Figura {

    constructor (largura, altura) {
        this.largura = largura
        this.altura = altura
    }
    //static determina que a variavel será ompartilhada, ou seja, será mantida, na classe e não mais no objeto
    static nomeClasse = 'Figura'

    // getter: metodo para retornar o calculo
    get area(){
        return this.calcArea()
    }

    //metodo para calcular area
    calcArea() {
        return this.largura * this.altura
    }
}

//cria objeto
const fig = new Figura (20,10)
console.log(fig.calcArea())
console.log (fig.area) //getter não precisa de parenteses ( )

const lajota = new Figura(30,30)
console.log(lajota.area + 'cm2')

console.log (fig.nomeClasse)
console.log (lajota.nomeClasse)

//outro exemplo usando static
class BB {

    static nome = 'Banco do Brasil'

    constructor (agencia){
        this.agencia = agencia
    }
}

agenciaPG = new BB ('Ponta Grossa')
agenciaCastro = new BB ('Castro')

console.log(agenciaPG.agencia)
console.log(agenciaCastro.agencia)
console.log(BB.nome)

//////////////////////////////////////////////////

//classe genérica, classe mãe ou superclasse
class Veiculo {

    constructor(marca, modelo, ano) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }

    //métodos não estáticos (pertencem ao objeto)
    ligar(){
        console.log('Veículo ligado...')
    }

    rodar(){
        console.log('Veiculo rodando...')
    }

    abastecer(){
        console.log('Veiculo abastecendo...')
    }

    exibirInfo(){
        console.log(`Marca:  ${this.marca} Modelo: ${this.modelo} Ano: ${this.ano}`)
    }
}

//classe especializada, classe filha ou subclasse
// classe filha herda todas os métodos (funções) da classe mãe
// extends => 'É UM'

class Carro extends Veiculo {

    // vou subescrever o método ligar() herdado de veículo
    ligar(){
        console.log('Carro ligado...')
    }
    // vou criar um novo método para o Carro
    acelerar(){
        console.log('Carro acelerando... VRUMMM VRUMMMM')
    }

}

// ou classe filha
// extends => Motocicleta é um veiculo
class Motocicleta extends Veiculo {
    constructor(marca, modelo, ano, cilindrada) {
        //para chamar o constructor da classe mãe usamos a palavra SUPER
        //super deve ser a primeira função a ser chamada dentro do constructor
        super(marca, modelo, ano)
        this.cilindrada = cilindrada
    }
    exibirInfo(){
        console.log(`Marca:  ${this.marca} Modelo: ${this.modelo} Ano: ${this.ano} Cilindrada: ${this.cilindrada}`)
    }

}

//agora vammos criar objetos a partir das classes
// observe que cada classe se escve com inicial Maiuscula e o objeto com Minuscula
// para criar o objeto usamos o operador 'new' e passamos os paramêtros do constructor

const veiculo = new Veiculo ('Fiat','Palio',2015)

//agora podemos chamar os metodos da classe
veiculo.ligar()
veiculo.abastecer()
veiculo.rodar()
veiculo.exibirInfo()

// gol é um Carro e um Veiculo ao mesmo tempo = polimorfismo de classe
const gol = new Carro ('Vw','Gol',2020)
gol.ligar()
gol.abastecer()
gol.rodar()
gol.acelerar()
gol.exibirInfo()

//xre é uma motocicleta e também é um veiculo ao mesmo tempo
const xre = new Motocicleta ('Honda','XRE 300', 2021, 6)
xre.ligar()
xre.abastecer()
xre.rodar()
xre.exibirInfo()







