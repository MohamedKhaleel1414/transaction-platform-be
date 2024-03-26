const InfoModel = require("../models/info");
const { v4: uuidv4 } = require("uuid");

const getAllDon = async (req, res) => {
  try {
    const list = await InfoModel.find({}, {});
    if (list) {
      res.status(200).send({
        message: "success",
        status: 200,
        data: list,
      });
    } else {
      res.status(404).send("Not found");
    }
  } catch (error) {
    console.log(error);
    res.send("Something went wrong. Try again later");
  }
};

const createDon = async (req, res) => {
  const code = uuidv4();
  let saveData = {
    ...req.body,
    uuid: code,
  };
  const newDon = new InfoModel(saveData);
  newDon
    .save()
    .then((data) => {
      res.status(201).send({
        message: "success",
        status: 201,
        data: data,
      });
    })
    .catch((error) => {
      console.log(error);
      res.send("Something went wrong. Try again later");
    });
};

const getOneDon = async (req, res) => {
  try {
    const don = await InfoModel.findOne({ uuid: req.params.id }, {});
    if (don) {
      res.status(200).send({
        message: "success",
        status: 200,
        data: don,
      });
    } else {
      res.status(404).send("Not found");
    }
  } catch (error) {
    console.log(error);
    res.send("Something went wrong. Try again later");
  }
};

const updateDon = async (req, res) => {
  const updatedData = req.body;
  try {
    const don = await InfoModel.findOneAndUpdate(
      { uuid: req.params.id },
      updatedData
    );
      res.status(200).send({
      message: "success",
      status: 200,
      data: don,
    });
  } catch (error) {
    console.log(error);
    res.send("Something went wrong. Try again later");
  }
};

module.exports = { getAllDon, createDon, getOneDon, updateDon };