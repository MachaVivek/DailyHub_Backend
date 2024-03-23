const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const IncomeFormSchema = new Schema({
  userId:{
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  option: {
    type: String,
    required: true
  },
  borrowerName: {
    type: String
  },
  borrowerPhone: {
    type: String
  },
  date: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('IncomeForm', IncomeFormSchema);
