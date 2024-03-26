const express = require('express')
const router = express.Router()
const paymentControllers = require('../controllers/paymentController')

router.post('/createpayment', paymentControllers.createPayment)
router.get('/getpayment/:id', paymentControllers.getPayments)

module.exports = router