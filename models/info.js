const mongoose = require("mongoose");

const infoCollection = new mongoose.Schema(
  {
    uuid: {
      type: String,
      required: true,
      unique: true,
    },
    payment_id: [
      {
        type: mongoose.Types.ObjectId,
        ref: "payment",
      },
    ],
    supporter: {
      type: String,
      required: true,
    },
    campaign: {
      type: String,
      required: true,
      enum: ["1", "2"],
    },
    don_date: {
      type: Date,
      default: Date.now(),
    },
    success_date: {
      type: Date,
      default: Date.now(),
    },
    frequency: {
      type: String,
      required: true,
      enum: ["One Time", "Monthly", "Yearly"],
    },
  },
  {
    strict: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("infoCollection", infoCollection);
