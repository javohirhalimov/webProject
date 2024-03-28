const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));

app.use( (req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
})

app.use('/dogs', (req, res, next) => {
    console.log('I love cats');
    next()
})

const verifyPassword = (req, res, next) => {
    const {password} = req.query;
    if(password === 'chickennugget'){
        next();
    }
    throw new Error('Password Required')
}


app.get('/', (req,res) => {
    res.send('Home Page!')
})

app.get('/error', (req, res) => {
    chicken.fly()
})

app.get('/dogs', (req,res) => {
    res.send('Woof woof!')
})

app.get('/secret', verifyPassword, (req, res) => {
    res.send('My secret is: no secret')
})

app.use( (req, res) => {
    res.status(404).send('Not found!')
})


app.listen(3000, () => {
    console.log('App is running on localhost:3000')
})