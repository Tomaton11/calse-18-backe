import express from "express";
import { registerController, verifyEmailController, loginController, resetPasswordController, rewritePasswordController} from "../controllers/auth.controller.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";



const authRouter = express.Router();

authRouter.post("/register", registerController)

authRouter.get('/verify-email', verifyEmailController)

authRouter.post('/login', loginController)

authRouter.post('/reset-password', resetPasswordController)

authRouter.put('/rewrite-password', rewritePasswordController)

export default authRouter