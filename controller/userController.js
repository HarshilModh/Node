var user=require("../model/userMode")
exports.saveuser=function(req,res){


    let u=new user({
        firstName: req.body.firstName,
        email:req.body.email,
        password:req.body.password
    })
    u.save(function(err,data){
        if(err){
            res.json({
                status:-1,
                data:err,
                msg:"Something went wrong"
            })
        }else{
            res.json({
                status:200,
                data:data,
                msg:"user save successfully"
            })  
        }
    })


}    

exports.listUser = function(req,res){
   user.find(function(err,data){
       if(err){
        res.json({
            status:-1,
            data:err,
            msg:"Something went wrong"
        })
       }
       else{
        res.json({
            status:200,
            data:data,
          
        })  
       }
   })
}


