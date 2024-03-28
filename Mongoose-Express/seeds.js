const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand2', { useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log('Mongo CONNECTION OPEN')
})
.catch(err => {
    console.log("OH NO Mongo Connection ERROR!!!!")
    console.log(err)
})

// const p = new Product({
//     name: 'Ruby Grapefruit',
//     price: 1.99,
//     category: 'Fruit'
// })

// p.save().then(p => {
//     console.log(p)
// })
// .catch(err => {
//     console.log(err)
// })
const seedProducts = [
    {
        name: 'Fairy Eggplant',
        price: 1.00,
        category: 'vegetable'
    },
    {
        name: 'Organic Goddes Melon',
        price: 4.99,
        category: 'fruit'
    },
    {
        name: 'Organic Mini Seedless Watermelon',
        price: 3.99,
        category: 'fruit'
    },
    {
        name: 'Tarbuz',
        price: 35.00,
        category: 'vegetable'
    },
    {
        name: 'Milk',
        price: 2.69,
        category: 'dairy'
    },
]


Product.insertMany(seedProducts)
.then(res => {
    console.log(res)
})
.catch(e => {
    console.log(e)
})