const mongoose = require("mongoose");

const paymentCollection = new mongoose.Schema(
  {
    uuid: {
      type: String,
      required: true,
      unique: true,
    },
    don_id: {
      type: mongoose.Types.ObjectId,
      ref: "info",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    platform_fee: {
      type: Number,
      default: 0.08,
    },
    payment_processing_fee: {
      type: Number,
      default: 0.4,
    },
    payout_amount: {
      type: Number,
      required: true,
    },
    payment_processor: {
      type: String,
      required: true,
    },
    payment_method: {
      type: String,
      required: true,
      enum: ["Credit Card"],
    },
    card_type: {
      type: String,
      required: true,
      enum: ["Visa", "Master Card"],
    },
    credit_card: {
      type: String,
      required: true,
    },
    is_fee_covered: {
      type: Boolean,
      default: false,
    },
    effective_fee: {
      type: String,
      default: "0%",
    },
  },
  {
    strict: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("paymentCollection", paymentCollection);
