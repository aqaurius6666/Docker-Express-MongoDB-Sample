const User = require('../../models/user')

const api = require('express').Router()

api.get('/', async (req, res) => {
    await new User({username:'vu', password:'vu'}).save()
    res.send('Hello from Express')
})

api.get('/user', async (req, res) => {
    const user = await User.find({})
    res.json({user})
})

module.exports = api