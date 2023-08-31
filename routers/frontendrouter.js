const router = require('express').Router()
const regc = require('../controllers/regcontroller')
const queryc = require('../controllers/querycontroller')
const orderc = require('../controllers/ordercontroller')
const product = require('../models/product')
const slider=require('../models/slider')


router.get('/', async (req, res) => {
    const record = await product.find()

    const imgrecord=await slider.find();
    

    res.render('index.ejs', {record,imgrecord})
})

router.get('/about', (req, res) => {
    res.render('aboutus.ejs')
})

router.get('/contact', (req, res) => {
    res.render('contactuss.ejs')
})

router.get('/custom', (req, res) => {
    res.render('customize.ejs')
})
router.get('/productorder/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const Product = await product.findById(productId)
        res.render('productorder.ejs', {Product})

    } catch (err) {

        res.status(500).send('Error fetching product details.');
    }



})

router.get('/product', async (req, res) => {
    const record = await product.find();

    res.render('products.ejs', { record })
})

router.get('/product',)


//  router.post('/contactus',contactc.contactpage)


router.post('/contact', queryc.queryadd)

router.post('/orderpost', orderc.addorder)





module.exports = router
