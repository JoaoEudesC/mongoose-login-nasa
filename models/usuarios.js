const { text } = require('body-parser')
const mongoose = require('mongoose')
const server = 'localhost'
const db = 'users'




mongoose.connect(`mongodb://${server}/${db}`)
.then(()=>{
    console.log('conexao bem feita')
})

.catch((err)=>{
    console.log('conexao mal feita' + err)
})



const usuarioSchema = new mongoose.Schema({
    Nome:String,
    Idade:Number,
    País:String,
    Profissão:String,
    Numero:String
})



module.exports = mongoose.model('users' , usuarioSchema)