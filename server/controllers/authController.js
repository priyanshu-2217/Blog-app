import jwt from "jsonwebtoken";
import authModel from "../models/authModel.js";
import bcryptjs from "bcryptjs";

class AuthController {
  static userRegistration = async (req, res) => {
    const { username, email, password } = req.body;
    try {
      if (!username || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const isUser = await authModel.findOne({ email });
      if (isUser) {
        return res.status(400).json({ message: "User already exists" });
      }

      const salt = await bcryptjs.genSalt(10);
      const hashedPassword = await bcryptjs.hash(password, salt);
      const user = new authModel({ username, email, password: hashedPassword });

      await user.save();
      return res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  static userLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
      if (!email || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const isUser = await authModel.findOne({ email });
      if (!isUser) {
        return res.status(400).json({ message: "User not found" });
      }

      const isMatch = await bcryptjs.compare(password, isUser.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Incorrect password" });
      }

      const token = jwt.sign(
        { userId: isUser._id },
        process.env.JWT_SECRET || "defaultSecretKey",
        { expiresIn: "2d" }
      );

      return res.status(200).json({ message: "User logged in successfully", token });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default AuthController;
