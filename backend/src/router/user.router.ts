import { Router } from "express";
import { auth, getUserInfo, updateUserInfo } from "../controller/user.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const userRouter = Router();

userRouter.post("/auth",auth)

userRouter.get("/profile",authMiddleware,getUserInfo)
userRouter.put("/profile",authMiddleware,updateUserInfo)


export default userRouter;