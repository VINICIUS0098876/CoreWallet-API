import { Request, Response, NextFunction } from "express";
import { TokenJwt } from "./JWTMiddleware";

export interface AuthRequest extends Request{
    userId?: number;
}

export function authMiddleware(req: AuthRequest, res: Response, next: NextFunction){
    const authHeader = req.headers.authorization;
    
    if(!authHeader){
        return res.status(401).json({message: "Authorization header missing"});
    }

    const token = authHeader.split(" ")[1];
    if(!token){
        return res.status(401).json({message: "token not provided"});
    }

    const decoded = TokenJwt.verifyToken(token);
    if(!decoded){
        return res.status(401).json({message: "Invalid token"});
    }

    req.userId = decoded.id_user;
    next();
}