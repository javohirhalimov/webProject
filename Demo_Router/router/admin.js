const express = require('express');
const router  = express.Router();


router.use((req, res, next) =>{
    if(req.query.isAdmin) {
        next();
    }
    res.send("Sorry Not An Admin!")
})

router.get('/topsecret', (req, res) =>{
    res.send("This Is Top Secret!")
})

router.get('/deleteeverything', (req, res) =>{
    res.send("Ok Deleted It All!")
})

module.exports = router;