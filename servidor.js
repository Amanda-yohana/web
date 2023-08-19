// instalando módulo express:
// npm install express

// importa db.js
const db = require('./db')
// importa o módulo expresso recem instalado
const express = require('express')
// import o módulo parser
const bodyParser = require('body-parser')
const { response } = require('express')

// cria um servidor js usando express - porém ainda não executa
const server = express()

// configura o servidor criado
server.use(express.json())
server.use(bodyParser.urlencoded({extended: true}))
server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type', 'Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'Content-Type', 'Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE')
    next()
})

// ======= a partir daqui é uma API Rest ========
// Esta função retorna todos os produtos via método HTTP GET
// GET: http://localhost:3000/produtos
server.get('/produtos', async(req, res) => {
    const produtos = await db.selecionaProdutos()
    return res.json(produtos)
})


// Retorna somente um produto através do id
// GET: http://localhost:3000/produtos/1
server.get('/produtos/:id', async(req, res) => {
    console.log(req.params)
    const {id} = req.params  // id = '1'
    const produto = await db.buscaPorId(id)  // id = '1'
    // retorna array contendo produto ou vazio
    return res.json(produto)
})


// Método para excluir produto
server.delete('/produtos/:id', async(req, res) => {
    const {id} = req.params
    const retorno = await db.deletaProduto(id)
    return res.json(retorno[0].affectedRows == 1)
})

// Salva um produto
// POST: http://localhost:3000/produtos
server.post('/produtos', async(req, res) => {
    const produto = req.body;
    console.log('===== Conteúdo do body: ', produto, '=====');

    const retorno = await db.insereProduto(produto)

    if (retorno[0].affectedRows == 1)
        res.json({sucesso : true})
    else
        res.json({sucesso : false})
})


// Atualiza um produto
// PUT: http://localhost:3000/produtos
server.put('/produtos', async(req, res) => {
    const produto = req.body
    console.log('===== Conteúdo do body', produto, '=====')

    const retorno = await db.atualizaProduto(produto.id, produto)

    if (retorno[0].affectedRows == 1)
        res.json({sucesso : true})
    else
        res.json({sucesso : false})
})


// Inicia a execução do servidor
server.listen('3000', () => {
    console.log('Servidor iniciado')
})