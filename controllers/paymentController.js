const { v4: uuidv4 } = require("uuid");
const PaymentModel = require("../models/payment");
const InfoModel = require("../models/info"); 

const getPayments = async (req, res) => {
  try {
    const payments = await PaymentModel.find({ don_id: req.params.id }, {});
    console.log(payments);
    if (payments) {
      res.status(200).send({
        message: "success",
        status: 200,
        data: payments,
      });
    } else {
      res.status(404).send("Not found");
    }
  } catch (error) {
    console.log(error);
    res.send("Something went wrong. Try again later");
  }
};

const createPayment = async (req, res) => {
  const code = uuidv4();
  let saveData = {
    ...req.body,
    uuid: code,
  };
  const newPayment = new PaymentModel(saveData);
  newPayment.save().then(async (data) => {
    console.log(data);
    const don = await InfoModel.findById(req.body.don_id, {})
    let paymentsArray = [...don.payment_id, data._id]
    const updatedDon = await InfoModel.findByIdAndUpdate(req.body.don_id, {payment_id: paymentsArray})
    console.log(updatedDon);
    res.status(201).send({
      message: "success",
      status: 201,
      data: data,
    })
  }).catch((error)=>{
    console.log(error)
    res.send("Something went wrong. Try again later");
  })
};

module.exports = { getPayments, createPayment };
