const { dbConnect } = require("../data/config");
const { getAllItems } = require("../model/home");
const User = require("../model/user");
exports.getHomePage=(req,res)=>{
    const items=getAllItems()
    res.render('index',{title:'Dynamic Title',headerValue:'Introduction to EJS Templating and MVC',itemList:items});
}

exports.getLogin=(req,res)=>{
    res.render('login',{title:'Login Page'})
}

exports.postSignIn=(req,res)=>{
    const Username=req.body.username;
    const Password=req.body.password;
    console.log(Username,Password)
    res.redirect('/login')
}

exports.getSignup=(req,res)=>{
   res.render('signup',{title:'Sign up Page',path:'/signup'})
}
exports.postSignup=(req,res)=>{
    const Name=req.body.name;
    const Email=req.body.email;
    const Phone=req.body.phoneNumber;
    const password=req.body.passWord;
    const confirmPassword=req.body.cpassword;
    const user={name:Name,email:Email,phone:Phone,password:password};
    // send user record into database
User.create(user,(error,result)=>{
    if(error){
        console.log(error)
        return 
    }
    console.log(result)
    res.redirect('/login')
})
   
}

exports.getUsers=(req,res)=>{
User.getAll((err,result)=>{
    if(err) return console.log(err)
    console.log(result)
res.render('users',{usersList:result,title:'All Users'})
})
}

exports.getSingleUser=(req,res)=>{
const userId=req.params.id;
console.log(userId)
User.getById(userId,(err,result)=>{
    if(err) {
        console.log(err)
        return
    }
console.log(result[0])
res.render('detail',{title:'Detail Page',userDetails:result[0]})
})

}