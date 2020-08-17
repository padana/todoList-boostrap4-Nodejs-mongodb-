const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
const getIndexControllers = require('../controllers/index')
const postIndexController= require('../controllers/index')
const editControllers = require('../controllers/edit')

router.get('/', getIndexControllers.getIndex)

const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.post('/ajouter', urlencodedParser, postIndexController.postIndex)

router.delete('/supprimer/:id', urlencodedParser, postIndexController.postDelete)

router.get('/edit/:id', urlencodedParser,  editControllers.getEdit)

router.put('/edit/:id',  urlencodedParser,  editControllers.putEdit)


module.exports= router 