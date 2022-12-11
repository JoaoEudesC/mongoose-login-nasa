    //chamando modulos

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const router = require('./router/router')
const path = require('path')


    //config

    app.use(bodyParser.urlencoded({extended:true}))
    app.use(bodyParser.json())

    //config arquivos staticos

    app.use(express.static(path.join(__dirname , "public")))
    
    
    //routes
    app.use(router)
    
    app.get('/form' , (req ,res)=>{
        res.sendFile(path.join(__dirname + '/html/index.html'))
    })
    
    
    app.get('/teste' , (req , res)=>{
        res.send("rota de teste")
    })




    //outros

    app.listen(port , ()=>{
        console.log(`o servidor esta rodando em http://localhost:${port}`)
    })
