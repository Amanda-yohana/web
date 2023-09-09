// Programação orientada a objetos

//classe mãe

class Animal {

    //declaração de variaveis privadas ou encapsulamento
    //não podem ser acessada de for aod objeto 
    #especie
    #nome
    #barulho


    // constructor da classe
    constructor (especie, nome, barulho) {
        this.#especie = especie
        this.#nome = nome
        this.#barulho = barulho
    }

    //define uma função getter apenas para leitura de propriedades privadas
    get especie(){
        return this.#especie
    }

    get nome(){
        return this.#nome
    }

    get barulho(){
        return this.#barulho
    }

    // define uma função SETTER - permite alterar proriedade privadas
    set especie (especie){
        if (especie == '') {
            //lança um erro
            throw new Error ('valor do parametro especie é invalido')
        }
        this.#especie = especie
    }

    set nome (nome){
        if (nome == '') {
            //lança um erro
            throw new Error ('valor do parametro nome é invalido')
        }
        this.#nome = nome
    }

    set barulho (barulho) {
        if (barulho == '') {
            //lança um erro
            throw new Error ('valor do parametro barulho é invalido')
        }
        this.#barulho = barulho
    }

    //metodo normal da classe
    fazerBarulho(){
        console.log(`${this.#nome} ${this.#barulho}`)
    }

    // metodo privado = não pode ser acessado de fora da classe
    #montarJSON(){
        return{
            especie: this.#especie,
            nome: this.#nome,
            barulho: this.#barulho

        }
    }

    // metodo para mostrar o metodo privado
    mostrarJSON(){
        console.log('\nDados em formato JSON: ', this.#montarJSON())
    }
}

//classe filha de Animal
class Cao extends Animal {
    //constructor classe Cao
    constructor(nome, som){
        // chama o constructor da classe mãe
        super('Mamifero', nome, som)
    }
}

//outra classe filha
class Gato extends Animal {
    //constructor da classe Gato
    constructor(nome, som){
    // chama o constructor da classe Mãe
    super ('Mamifero', nome, som)
    }
}

// cria objetos
schooby = new Cao ('Schooby', 'latindo: AU AU AU AU')
tom = new Gato ('Tom', 'miando: MIAU MIAU')

//chama o metodo herdado da classe mãe
schooby.fazerBarulho()
tom.fazerBarulho()

//chama os setters
schooby.nome = 'Schooby Doo'
tom.nome = 'Tom Felix'

// chama os getters
console.log(schooby.especie, schooby.nome, schooby.barulho)
console.log (tom.especie, tom.nome, tom.barulho)

//mostra dados em formato JSON - usa função interna privada
schooby.mostrarJSON()
tom.mostrarJSON()

//tenta acessar um propriedade privada => vai dar erro
//SyntaxError: Private field '#nome'
//schooby.#nome = 'Totó'
