import { Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';

const awt = function(req : Request, res : Response, next : NextFunction) {
  //console.log(req.headers);
    const tokens = req.headers.token as any;//write authorization isntead of token
 ;
    if (!tokens) return res.status(401).json({ message: "Auth Error" });
   
    try {
      const decoded = jwt.verify(tokens , "randomString") as any;
      req.user = decoded.user ;
      next();
    } catch (e) {
      console.error(e);
      res.status(500).send({ message: "Invalid Token" });
    }
  };

  
  export default awt;