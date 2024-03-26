const express = require('express')
const router = express.Router()
const donControllers = require('../controllers/infoControllers')

router.post('/createdon', donControllers.createDon)
router.get('/alldons', donControllers.getAllDon)
router.get('/don/:id', donControllers.getOneDon)
router.patch('/updatedon/:id', donControllers.updateDon)

module.exports = router
