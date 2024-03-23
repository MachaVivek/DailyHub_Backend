const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  option: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('Expense', ExpenseSchema);
