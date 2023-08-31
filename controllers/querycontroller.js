const Query = require('../models/query')





exports.queryadd = (req, res) => {
    const { name, mobile, email, message } = req.body
    const record = new Query({ name: name, mobile: mobile, email: email, message: message })
    record.save()
    console.log(record)
}


exports.pageshow = async (req, res) => {
    const record = await Query.find()
    res.render('admin/query.ejs', { record })
}


exports.querydelete = async (req, res) => {
    const id = req.params.id
    await Query.findByIdAndDelete(id)
    res.redirect('/admin/query')
}


//contact us 



