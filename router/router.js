const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')





router.post('/form' , userController.createUser)
router.get('/usuariook' , userController.usuariok)
router.get('/usuariobad' , userController.usuariobad)





module.exports = router