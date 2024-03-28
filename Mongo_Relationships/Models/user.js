const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/relationshipDemo', {
    useNewUrlParser: true,
    //useCreateIndex: true,
    useUnifiedTopology: true
}).then( () => {
    console.log("Mongo Connection Open!!!")
}).catch(err => {
    console.log("Oh No Mongo Connection Error!!!")
    console.log(err)
})

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [
        {
           // _id: {id: false},
            address: String,
            city: String,
            state: String,
            country: String
        }
    ]
})

const User = mongoose.model('User', userSchema);

const  makeUser = async()=> {
    const u = new User({
        first: 'Harry',
        last: 'Potter',
    })
    u.addresses.push({
        street: '123 Sesame St',
        city: 'New York',
        state: 'New York',
        country: 'USA'
    })
    const res = await u.save()
    console.log(res)
}

const addAddress = async(id) => {
    const user = await User.findById(id);
    user.addresses.push(
        {
            street: '99 3rd St.',
            city: 'New York',
            state: 'NY',
            country: 'USA',
        }
    )
    const res = await user.save()
    console.log(res);
}

addAddress('65a5df1a3412719d0351e85f')
//makeUser()