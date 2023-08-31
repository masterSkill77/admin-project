const slider=require('../models/slider')

exports.addslider=async(req,res)=>{

res.render('admin/addSlider.ejs')


}



exports.viewslider=async(req,res)=>{

    const slidrecord=await slider.find()

res.render('admin/viewSlider.ejs', {slidrecord})

}

exports.sliderDelete=async(req,res)=>{
const sliderId=req.params.id;
await slider.findByIdAndDelete(sliderId)
res.redirect('/admin/viewslider')


}