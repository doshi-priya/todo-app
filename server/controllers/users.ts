import { Response, Request } from "express";
import { check, validationResult}  from "express-validator";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import { IUsers } from "../common/toolbox/types/users";
import Users from "../common/toolbox/models/users";


const signUp = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }

        const {username, email, password} = req.body;
    try{

        let user  = await Users.findOne({
            email
        });
        if (user) {
            return res.status(400).json({
                msg: "User Already Exists"
            });
        }

        user = new Users({
            username,
            email,
            password
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(
            payload,
            "randomString", {
                expiresIn: 100000
            },
            (err, token) => {
                if (err) throw err;
                res.status(200).json({
                    token,
                });
            }
        );
    }catch(error){
        throw error;
    }
}

const login = async (req: Request, res: Response) => {
   
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }
 
  
      const { username, password } = req.body;
      try {
        let user = await Users.findOne({
          username
        });
        if (!user)
          return res.status(400).json({
            message: "User Not Exist"
          });
  
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
          return res.status(400).json({
            message: "Incorrect Password !"
          });
  
        const payload = {
          user: {
            id: user.id,
            username: user.username,
            email: user.email
          }
        };
  if(user){
        const token = jwt.sign(
          payload,
          "randomString",
        )
      return res.json({status:'ok', user : token});
    }
      else{
        return res.status(400).json({
          message: "User Not Exist"
        });
      }
      }catch(error){
          throw error;
      }
}

const auth = async (req: Request, res: Response) => {
    try {
        const user = await Users.findById(req.user.id);
        res.json(user);
      } catch (e) {
        res.send({ message: "Error in Fetching user" });
      }
    
}

export {signUp, login, auth };