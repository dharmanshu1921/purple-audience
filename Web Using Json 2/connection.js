let mongoose =require ("mongoose");
let URI = "mongodb+srv://dharmanshu1921:192128sh@cluster0.4x7wqux.mongodb.net/test";
let con=async()=>{
     try{
          let con=await mongoose.connect(URI, {useUnifiedTopology : true,
               useNewUrlParser: true
          }
          )
          console.log("database is connected");
     }
     catch(err){
          console.log(err);
     }
}
module.exports=con
