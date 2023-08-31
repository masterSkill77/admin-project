const product=require('../models/product')

exports.product=async(req,res)=>{

const record=await product.find()
res.render('products.ejs', {record})


}
