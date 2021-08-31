var express=require("express")
var mongoose=require("mongoose")
var apiRoutes=require("./api-routes")

const app=express()

app.use(express.json())
app.use(express.urlencoded({ extended:true }))

mongoose.connect("mongodb://localhost:27017/mongodemo1", {useNewUrlParser: true,useUnifiedTopology:true});

app.use("/api",apiRoutes)

app.listen(3000,function(){
    console.log("server started....");
})