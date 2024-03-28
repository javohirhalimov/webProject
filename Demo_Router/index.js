const express = require('express');
const app = express();
const shelterRoutes = require('./router/shelters')
const dogRoutes = require('./router/dogs')
const adminRoutes = require('./router/admin')

app.use('/shelters', shelterRoutes);
app.use('/dogs', dogRoutes);
app.use('/admin', adminRoutes);

app.listen(3000, () =>{
    console.log('Serving app on localhost:3000')
})
