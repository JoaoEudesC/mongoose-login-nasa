const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')





router.post('/form' , userController.createUser)
router.get('/usuariook' , userController.usuariok)
router.get('/usuariobad' , userController.usuariobad)
router.get('/usuarios' , userController.findall)





module.exports = router