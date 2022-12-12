const { text } = require('body-parser')
const mongoose = require('mongoose')
const server = 'localhost'
const db = 'users'
const bcrypt = require('bcrypt')




const ligar = mongoose.connect(`mongodb://${server}/${db}`)
.then(()=>{
    console.log('conexao bem feita')
})

.catch((err)=>{
    console.log('conexao mal feita' + err)
})



const usuarioSchema = new mongoose.Schema({
    Nome:{
        type:String,
        required:true
    },
    Idade:{
        type:Number,
        required:true
    },
    Senha:{
        type:String,
        required:true,
        unique:true,
        
    },
    País:{
        type:String,
        required:true
    },
    Profissão:{
        type:String,
        required:true
    },
    Numero:{
        type:String,
        required:true
    },
    
})

usuarioSchema.pre('save' , async function(next){
    this.Senha = await bcrypt.hash(this.Senha , 10);
    next();
})

module.exports = mongoose.model('users' , usuarioSchema)

