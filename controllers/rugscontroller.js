const rugs=require('../models/rugs');

exports.pageshowrug=async(req,res)=>{


const record=await rugs.find();
res.render('admin/ruges.ejs', {record})

}

exports.rugsdelete = async (req, res) => {
    const id = req.params.id
    await rugs.findByIdAndDelete(id)
    res.redirect('/admin/ruges')
}