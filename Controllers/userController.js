const users = require('../Models/userModel') 
const jwt = require('jsonwebtoken')


// export
exports.register = async (req,res)=>{
    console.log("Inside REGISTER API");
    const{username,email,password} = req.body
    console.log(username,email,password);
    try{
      const exitingUser = await users.findOne({email}) 
      console.log(exitingUser);
      if(exitingUser){
      res.status(406).json("Account already exists....please login!!")
      }else{
      // add user to  collection
      const newUser = new users({
      username,email,password,profile:"",github:"",linkedin:""
      })
      await newUser.save()
      res.status(200).json(newUser)
      }

    }catch(err){
      res.status(401).json(err)

   }

}

// login
exports.login = async (req,res)=>{
   console.log("Inside REGISTER API");
   const{email,password} = req.body
   console.log(email,password);
   try{
      const exitingUser = await users.findOne({email,password}) 
      console.log(exitingUser);
      if(exitingUser){
      // allow to login existing user
      const token = jwt.sign({userId:exitingUser._id},process.env.JWT_SECRET_KEY)  
      res.status(200).json({exitingUser,token})
 
      }else{
      res.status(404).json("Invalid Email / Password") 
      }

   }catch(err){
      res.status(401).json(err)

   }

}

// updateprofile
exports.editUser = async(req,res)=>{
   console.log("inside profile edit");
   const userId = req.payload 
   const {username,password,email,github,linkedin,profileImage} = req.body
   const profile = req.file?req.file.filename:profileImage
   console.log(profile);
   try{
      const updateUser = await users.findByIdAndUpdate({_id:userId},{username,email,password,profile,github,linkedin},{new:true})
      await updateUser.save()
      res.status(200).json(updateUser)
   }catch(err){
      res.status(401).json(err)
   }

}



