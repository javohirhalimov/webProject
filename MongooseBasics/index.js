const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp', { useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log('CONNECTION OPEN')
})
.catch(err => {
    console.log("Oh no ERROR!!!!")
    console.log(err)
})

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function(){
//     console.log('Connection open')
// })

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

 const Movie = mongoose.model('Movie', movieSchema)
// const amadeus = new Movie({title: 'Amadeus', year: 1986, score:9.2, rating: 'R'});

// Movie.insertMany([
//     {title: 'Amalie', year: 2001, score: 8.3, rating: 'R'},
//     {title: 'Alien', year: 1979, score: 8.1, rating: 'R'},
//     {title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG'},
//     {title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R'},
//     {title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13'}
// ])
// .then(data => {
//     console.log("IT worked");
//     console.log(data)
// })

Movie.find({_id:'659dd178a6590a855b8bf493'})