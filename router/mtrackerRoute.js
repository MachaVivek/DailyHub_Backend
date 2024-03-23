const express =require("express");
const router=express.Router();
const incomeModel = require("../models/moneytracker/incomemodel");
const expenseModel = require("../models/moneytracker/expensemodel");

router.post('/postincome', async (req, res) => {
    try {
      const { amount, option, borrowerName, borrowerPhone, date,userId } = req.body;
      const newForm = new incomeModel({
        userId,
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
    const { amount, subject, option, date, userId } = req.body;
    const newExpense = new expenseModel({
      userId,
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
router.get('/getincomeforms/:userId', async (req, res) => {
  try {
      const allIncomeForms = await incomeModel.find({ userId: req.params.userId });
      res.status(200).json(allIncomeForms);
  } catch (error) {
      console.error('Error fetching income forms:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
});

// GET route to fetch all expense forms
router.get('/getexpenseforms/:userId', async (req, res) => {
  try {
      const allExpenseForms = await expenseModel.find({ userId: req.params.userId } );
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
