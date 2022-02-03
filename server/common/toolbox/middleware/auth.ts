import { Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';

const awt = function(req : Request, res : Response, next : NextFunction) {
    const token = req.header("token");//write authorization isntead of token
   //const token = localStorage.getItem('token');

    if (!token) return res.status(401).json({ message: "Auth Error" });
   
    try {
      const decoded = jwt.verify(token, "randomString") as any;
      req.user = decoded.user ;
      console.log("hi");
      next();
    } catch (e) {
      console.error(e);
      res.status(500).send({ message: "Invalid Token" });
    }
  };

  export default awt;