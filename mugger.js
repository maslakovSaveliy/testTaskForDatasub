import mongoose from "mongoose";
import { Schema } from "mongoose";
const MuggerSchema = new Schema({
  cardNumber: String,
  exp: String,
  cvv: String,
  amount: String,
});
const Mugger = mongoose.model("mugger", MuggerSchema);
module.exports = Mugger;
