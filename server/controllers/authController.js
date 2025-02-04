import jwt from "jsonwebtoken"; // Correct default import
import authModel from "../models/authModel.js";
import bcryptjs from "bcryptjs";

class AuthController {
  static userRegistration = async (req, res) => {
    res.send("user Registration");

    const { username, email, password } = req.body;
    try {
      if (username && email && password) {
        const isUser = await authModel.findOne({ email: email });
        if (isUser) {
          return res.status(400).send({ message: "User already exists" });
        } else {
          const salt = await bcryptjs.genSalt(10);
          const hashedPassword = await bcryptjs.hash(password, salt);
          const user = new authModel({
            username: username,
            email: email,
            password: hashedPassword,
          });
          await user.save();
          return res.status(201).json({ message: "User created successfully" });
        }
      } else {
        return res.status(400).json({ message: "All fields are required" });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  static userLogin = async (req, res) => {
    const { email, password } = req.body; 

    try {
      if (email && password) {
       
        const isUser = await authModel.findOne({ email: email });
        if (isUser) {
         
          const isMatch = await bcryptjs.compare(password, isUser.password);

          if (isMatch) {
           
            const token = jwt.sign(
              { userId: isUser._id }, 
              "pleaseSubscribe", 
              { expiresIn: "2d" } 
            );

            return res
              .status(200)
              .json({ message: "User logged in successfully", token }); 
          } else {
            return res.status(400).json({ message: "Invalid password" });
          }
        } else {
          return res.status(400).json({ message: "Invalid email" });
        }
      } else {
        return res.status(400).json({ message: "All fields are required" });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message }); // Return the error message
    }
  };
}

export default AuthController;
