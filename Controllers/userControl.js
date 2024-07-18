const userModel = require("../Models/userModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv=require("dotenv")
dotenv.config()
const JWT_SECRET=process.env.JWT_SECRET
exports.createUser = async (req,res)=>{
    try{
        let data=req.body
        const createdUser = await userModel.create(data);
        res.status(201).json({createdUser});
        console.log(data)
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"Something went wrong!"});
    };
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
console.log({email})
        // Check if the user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            console.log("not found");
            return res?.status(404).json({ message: "User not found" });
          
        }

        // Compare the password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.log("not matched");
            return res?.status(400).json({ message: "Invalid credentials" });
        }
        
        // Generate a token
        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
        console.log("",token);
        res?.status(200).json({ code: 200 ,token, user: { id: user._id, email: user.email, username: user.username } });
    } catch (error) {
        console.log(error);
        res?.status(500).json({ message: "Something went wrong!" });
    }
};
