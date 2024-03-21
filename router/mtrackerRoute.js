const express =require("express");
const router=express.Router();
const incomeModel = require("../models/moneytracker/incomemodel");
const expenseModel = require("../models/moneytracker/expensemodel");

router.post('/postincome', async (req, res) => {
    try {
      const { amount, option, borrowerName, borrowerPhone, date } = req.body;
      const newForm = new incomeModel({
        amount,
        option,
        borrowerName,
        borrowerPhone,
        date
        });
        const savedForm = await newForm.save();
        res.status(201).json(savedForm);
    } catch (error) {
      console.error('Error submitting form:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
});


router.post('/postexpense', async (req, res) => {
    try {
      const { amount, subject, option, date } = req.body;
      const newExpense = new expenseModel({
        amount,
        subject,
        option,
        date
      });
      const savedExpense = await newExpense.save();
  
      res.status(201).json(savedExpense);
    } catch (error) {
      console.error('Error submitting expense:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
});

// GET route to fetch all income forms
router.get('/getincomeforms', async (req, res) => {
  try {
      const allIncomeForms = await incomeModel.find();
      res.status(200).json(allIncomeForms);
  } catch (error) {
      console.error('Error fetching income forms:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
});

// GET route to fetch all expense forms
router.get('/getexpenseforms', async (req, res) => {
  try {
      const allExpenseForms = await expenseModel.find();
      res.status(200).json(allExpenseForms);
  } catch (error) {
      console.error('Error fetching expense forms:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE route to delete an income form by ID
router.delete('/deleteincome/:id', async (req, res) => {
  try {
      const deletedIncome = await incomeModel.findByIdAndDelete(req.params.id);
      if (!deletedIncome) {
          return res.status(404).json({ error: 'Income form not found' });
      }
      res.status(200).json({ message: 'Income form deleted successfully' });
  } catch (error) {
      console.error('Error deleting income form:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE route to delete an expense form by ID
router.delete('/deleteexpense/:id', async (req, res) => {
  try {
      const deletedExpense = await expenseModel.findByIdAndDelete(req.params.id);
      if (!deletedExpense) {
          return res.status(404).json({ error: 'Expense form not found' });
      }
      res.status(200).json({ message: 'Expense form deleted successfully' });
  } catch (error) {
      console.error('Error deleting expense form:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports=router;
