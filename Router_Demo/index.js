const express = require('express');
const app = express();
const shelterRoutes = require('./router/shelters')

app.use('/shelters', shelterRoutes);


app.listen(3000, () =>{
    console.log('Serving app on localhost:3000')
})
