const express = require('express');
const router  = express.Router();

router.get('/shelters', (req, res) => {
    res.send('All Shelter')
})

router.post('/shelters', (req, res) => {
    res.send('Creating Shelter')
})

router.get('/shelters/:id', (req, res) => {
    res.send('Viewing One Shelter')
})
router.get('/shelters/:id/edit', (req, res) => {
    res.send('Editing One Shelter')
})

module.exports = router;