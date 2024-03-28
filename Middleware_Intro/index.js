const express = require('express');
const app = express();
const morgan = require('morgan');

const AppError = require('./AppError')
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
    throw new AppError('password required', 401)
   // throw new Error('Password Required')

}


app.get('/', (req,res) => {
    res.send('Home Page!')
})


app.get('/dogs', (req,res) => {
    res.send('Woof woof!')
})

app.get('/secret', verifyPassword, (req, res) => {
    res.send('My secret is: no secret')
})

app.get('/admin', (req, res) => {
    throw new AppError('You are not an Admin!', 403)
})

app.use( (req, res) => {
    res.status(404).send('Not found!')
})

// app.use( (err, req, res, next) => {
//     console.log("=============")
//     console.log("====ERROR====")
//     console.log("=============")
//     next(err)
//    // res.status(500).send("Oh boy we got an error")
// })

app.use( (err, req, res, next) => {
    const {status = 500} = err;
    const {message = 'Something Went Wrong'} = err;
    res.status(status).send(message)
})


app.listen(3000, () => {
    console.log('App is running on localhost:3000')
})