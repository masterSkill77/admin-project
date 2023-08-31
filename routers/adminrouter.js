const router = require('express').Router()
const regc = require('../controllers/regcontroller')
const queryc = require('../controllers/querycontroller')
const rugsc = require('../controllers/rugscontroller')
const orderc=require('../controllers/ordercontroller')
const prodc=require('../controllers/productcontroller')
const sliderc=require('../controllers/slidercontroller')



function handlelogin(req,res,next){
    if(req.session.isAuth){
        next()
    }else{
        res.redirect('/admin/')
    }
    } 
    



router.get('/', regc.adminlogin)
router.post('/', regc.logincheck)
router.get('/dashboard',handlelogin, regc.dashboard)
router.get('/logout',regc.logoutt)


router.get('/query',handlelogin, queryc.pageshow)

router.get('/querydelete/:id', queryc.querydelete)

router.get('/ruges', handlelogin,rugsc.pageshowrug)
router.get('/rugesdelete/:id', rugsc.rugsdelete)


router.get('/order',handlelogin, orderc.orderpage)
router.get('/orderdelete/:id',orderc.orderDelete)
router.post('/toggle/:id', orderc.orderId)

router.get('/viewProduct',handlelogin,prodc.product)
router.get('/productDelete/:id',prodc.productDelete)
router.post('/productactive/:id',prodc.productId)
router.get('/addproduct',prodc.addProduct)


router.get('/addslider',handlelogin,sliderc.addslider)

router.get('/viewslider',handlelogin,sliderc.viewslider)
router.get('/sliderDelete/:id',sliderc.sliderDelete)










module.exports = router