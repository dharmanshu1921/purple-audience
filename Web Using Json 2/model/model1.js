// const { default: mongoose } = require("mongoose");

// let schema = new mongoose.Schema(
//      {
//           username:{type:String, required:true, unique:true},
//           password:{type:String, required:true, unique:true}
//      }
// ) 
// let user =new mongoose.model("user",schema) 

// saveMultipleDoc=()=>{
//      let s1 = new user({
//           username:"amya",
//           password:"1265",
//      })
//      let s2 = new user({
//           username:"amaya",
//           password:"1295",
//      })
//      let s3 = new user({
//           username:"amit",
//           password:"1295",
//      })
//      await s1.save()
//      await s2.save()
//      await s3.save()
//      // let s2 = new user({
//      //      username:"amia",
//      //      password:"245",
//      // })
//      // s2.save()
//      // let s3 = new user({
//      //      username:"amabhh",
//      //      password:"679",
//      // })
//      // s3.save()
// }
// module.exports=saveMultipleDoc