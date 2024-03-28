const express = require("express");
const app = express();

// app.use((req, res) => {
//     console.log("We got a new request!!")
//     //res.send("Hello, we got your request! this is a request")
//     //res.send({color: 'red'});
//     res.send("<h1> This is a request</h1>")
// })


app.get('/', (req, res) => {
    res.send("Welcome to the home page!")
})
 
app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params;
    res.send(`<h1> Browsing the ${subreddit} </h1>`)
    console.log(req.params);
    res.send("this is a subreddit!")
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const {subreddit, postId} = req.params;
    res.send(`<h1> Viewing Post ID: ${postId} from ${subreddit} subreddit</h1>`)

})

app.post('/cats', (req,res) => {
    res.send('Post request to /cats')
})
app.get('/cats', (req, res) => {
    res.send("Cat request!!!")
})

app.get('/dogs', (req, res) => {
    res.send("WOOF!!!")
})

app.get('/search', (req, res) => {
    const {q} = req.query;
    if(!q) {
        res.send('NOTHING FOUND IF NOTHING SEARCHED')
    }
    res.send(`<h1> Search results for: ${q} </h1>`)
    console.log(req.query);
    res.send("Hi")
})

app.get('*', (req, res) => {
    res.send(`I dont know that path!`)
})




app.listen(3000, () => {
    console.log("Listening on port 3000!")
})