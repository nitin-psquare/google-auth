import express, { Router, type Request, type Response } from "express";
import User from "../model/user.model.js"
import jwt from "jsonwebtoken"
import { OAuth2Client } from "google-auth-library";
import dotenv from "dotenv"
dotenv.config()

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)


async function auth(req:Request,res:Response) {
    const {token} = req.body;

    const userData = await client.verifyIdToken({
        idToken:token,
        audience:process.env.GOOGLE_CLIENT_ID ||""
    })

    const payloadData = userData.getPayload();
    
    if (!payloadData) {
        res.status(400).json({ error: "Invalid token" });
        return;
    }

    const{name,email,picture} = payloadData;


    if(!name || !email || !picture){
      return res.json({
        msg:"jnk"
      })
    }

    const user = await User.create({
      email:email,
      name:name,
      profilePic:picture
    })


    const authtoken =  jwt.sign(
      {userId:user._id},
       process.env.JWT_SECRET as string,
    )

    if(!user){
      return res.json({msg:"user failed to add"})
    }

    return res.json({
      msg:"user created",
      token:authtoken
    })
    
}

async function getUserInfo(req:Request,res:Response){
  const id = req.userId

  const user = await User.findById(id)

  return res.json({user})
}

async function updateUserInfo(req:Request,res:Response){

  const {name,email} = req.body;
  const id = req.userId

  const updateUser = await User.findByIdAndUpdate(id,{
      name:name,
      email:email
    },{
      new:true
  })

  return res.json({
    msg:"user updated",
    updateUser
  })
}


export {
    auth,
    getUserInfo,
    updateUserInfo
}