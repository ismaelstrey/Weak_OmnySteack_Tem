const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express();
mongoose.connect('mongodb+srv://ismaelstrey:PHJ8J9t9UNxa3ZcR@cluster0-td9af.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
app.use(express.json())
app.use(routes)
app.listen(3333);