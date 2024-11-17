const express = require('express');
const baseRouter = express.Router()

function baseFunction(messages) {
    baseRouter.get('/', (req, res) =>{
        res.render("index", { messages: messages});
    })

    baseRouter.get('/new', (req, res) => {
        res.render('form');
    })

    baseRouter.post('/new', (req, res) =>{
        messages.push({ text: req.body.message, user: req.body.author, added: new Date() });
        res.redirect('/');
    })

    
    return baseRouter
}


module.exports = baseFunction;