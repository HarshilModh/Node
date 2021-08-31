var router=require("express").Router()
var userController=require("./controller/userController")

router.route("/saveuser").post(userController.saveuser)
router.route("/listuser").post(userController.listUser)


module.exports=router