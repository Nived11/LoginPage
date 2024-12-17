import userSchema from "../models/user.model.js"
import bcrypt from "bcrypt"
export async function addUser(req,res) {
   const {username,email,password,cpassword}=req.body;
   console.log(username,email,password,cpassword);
   //check fields are empty
   if(!(username&&email&&password&&cpassword))
    return(res.status(404).send({msg:"fields are empty"}));
//compare password and confirm password 
   if(password!==cpassword)
    return(res.status(404).send({msg:"password not match"}));
//check email already exist
const data=await userSchema.findOne({email})
if(data)
    return(res.status(404).send({msg:"email already exist try another mail"}));
//convert password to hashed
const hpassword=await bcrypt.hash(password,10)
console.log(hpassword);
// create user
await userSchema.create({username,email,password:hpassword}).then(()=>{
    res.status(201).send({msg:"successfully created"})
}).catch((error)=>{
    res.status(500).send({error})
})


}