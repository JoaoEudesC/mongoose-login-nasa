const userController = {}
const usuarios = require('../models/usuarios')












userController.createUser = (req, res)=>{
    const user = new usuarios({
        Nome:req.body.Nome,
        Idade:req.body.Idade,
        País:req.body.País,
        Profissão:req.body.Profissão,
        Numero:req.body.Numero
    })

    user.save()
    .then((doc)=>{
        res.redirect('/usuariook')
    })

    .catch((error)=>{ 
        res.redirect('/usuariobad')
    })
}


userController.usuariok=(req ,res)=>{
    res.send('usuario cadastrado com sucesso')
}

userController.usuariobad = (req, res)=>{
    res.send('usuario nao cadastrado')
}
















module.exports = userController