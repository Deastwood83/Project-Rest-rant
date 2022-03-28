const router = require('express').Router()

router.get('/new', (req, res) => {
    res.render('places/new')
  })

router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
  })

router.get('/', (req, res) => {
    let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: 'https://placekitten.com/250/250'
    }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/cat1.jpg'
    }, {
    name: 'Placeholder',
    city: 'Placeholder',
    state: 'Placeholder',
    cuisines: 'Placeholder',
    pic: '/images/food1.png'
    }]
    res.render('places/index', {places})
    })

module.exports = router