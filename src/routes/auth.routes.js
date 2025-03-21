import express from "express";
import { registerController, verifyEmailController, loginController, resetPasswordController } from "../controllers/auth.controller.js";
import { verifyLuckyMiddleware } from "../middlewares/verifyLuckyMiddleware.js";

const authRouter = express.Router();


authRouter.post("/register", registerController)

authRouter.get("/verify-email", verifyEmailController)

authRouter.post("/login", verifyLuckyMiddleware, loginController)

authRouter.post("/reset-password", resetPasswordController)

authRouter.put("/rewritepassword", resetPasswordController)

export default authRouter
