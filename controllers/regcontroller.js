const Reg=require('../models/reg')


exports.adminlogin=(req,res)=>{
    res.render('admin/login.ejs',{message:" "})
}


exports.logincheck=async(req,res)=>{
    const {username,password}=req.body
    const usercheck=await Reg.findOne({username:username})
    if(usercheck!==null){
        if(usercheck.password==password){
            req.session.isAuth=true
        res.redirect('/admin/dashboard')
        }else{
            res.render('admin/login.ejs',{message:"Wrong Credential"})
        }
    }else{
        res.render('admin/login.ejs',{message:"Wrong Credential"})
    }
}

exports.dashboard=(req,res)=>{
    res.render('admin/dashboard.ejs')
    
    }

    exports.logoutt=(req,res)=>{
        req.session.destroy()
        res.redirect('/admin/')
    }

