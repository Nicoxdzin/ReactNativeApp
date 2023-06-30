require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const transactionsRouter = require('./routes/transactions')

const app = express();
app.use(cors());
app.use(express.json());

const db = mongoose.connection
db.on('error', (error) => console.log(error));
db.once('open', () => console.log ('Connected to Database'))


app.use('/transactions', transactionsRouter)


app.get('/', (req, res) => {
    res.send("Olá")
})



const port = 3000;
app.listen(port, () => {
    mongoose.connect(process.env.DATABASE_URL , { useNewUrlParser: true })
    console.log("waiting for changes")
})