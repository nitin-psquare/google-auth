import type{ NextFunction, Request,Response } from "express"
import jwt from "jsonwebtoken"


interface CustomRequest extends Request{
    userId?: string,
}

export async function authMiddleware (req:CustomRequest,res:Response,next:NextFunction){

    const authHeader  = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.json({
            msg:"No header provided"
        })
    }

    const token = authHeader.split(' ')[1];

    if (!token){
        return res.json({
            msg:"Failed to extract token"
        })
    }

    try {

        const decoded:any = jwt.verify(token,process.env.JWT_SECRET as string)


        req.userId= decoded.userId;

        next();
        
    } catch (error) {
        console.log(error)
    }
}