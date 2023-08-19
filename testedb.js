(async () => {

    // importa nossa biblioteca db.js
    const db = require('./db')

/*
    console.log('Pesquisando todos os produtos')
    const produtos = await db.selecionaProdutos()
    console.log(produtos)

*/
    console.log('Buscando produto por id')
    const produto = await db.buscaPorId(1)
    console.log(produto)

/*
    console.log('inserindo Produto...')
    produto = {
        descricao: 'Barra de Cereais Vegana',
        categoria: 1,
        preco: 21.60,
        quantidade: 5,
        url: 'imagens/cereais.png'
    }
    const inseriu = await db.insereProduto(produto)
    console.log(inseriu)
 


    console.log('Apagando produto...')
    const apagou = await db.deletaProduto(6)
    console.log(apagou[0].affectedRows == 1) 
       */

})()