import jwt from "jsonwebtoken";
import authModel from "../models/authModel";

const checkUserAuthenticated = async (req,res,next)=>{
    let token;
    const{authorizaton}= req.headers;
    if(authorization && authorization.startsWith("Bearer")){
        try{
        token = authorizaton.split(" ")[1];
        const {userId}= jwt.verify(token,"Welcome");
        req.user = await authModel.findById(userId).select("--passwrod");
        next();
        }
        catch(error){
            return res.status(401).json({message:"Unauthorized User"});
        }
    }
    else{
        return res.status(401).json({message:"Unauthorized User"});
    }
}
export default checkUserAuthenticated;