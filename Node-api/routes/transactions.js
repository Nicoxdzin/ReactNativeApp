const express = require('express');
const router = express.Router()
const Transaction = require('../models/transactionModel')

//Getting all
router.get('/', async (req,res) => {
    try{
        const transaction = await Transaction.find();
        res.json(transaction)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

//Getting One
router.get('/:id', getTransactions, (req,res) => {
    res.send(req.transaction)
})

//Creating one
router.post('/', async (req,res) => {
    const transaction  = new Transaction({
        amount: req.body.amount,
        reference: req.body.reference,
        date: req.body.date,
    })
    try{
        const addTransaction = await transaction.save()
        res.status(201).json(addTransaction)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

//Updating one
router.patch('/:id', (req,res) => {

})

//Deleting One

router.delete('/:id', (req,res) => {

})

async function getTransactions(req, res, next){
    try{
        transaction = await Transaction.findById(req.params.id)
        if(transaction == null) {
            return res.status(404).json({message: 'id não encontrado'})
        }
    } catch (err) {
        return res.status(500).json({message: err.message})
    }

    res.transaction = transaction
    next()
}

module.exports = router