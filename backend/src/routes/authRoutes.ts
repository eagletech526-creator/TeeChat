import { Router } from "express";
import { authCallback, getMe } from "../controllers/authController";
import { ProtectRoute } from "../middleware/auth";

const router = Router();

router.get("/me", ProtectRoute, getMe);
router.post("/callback", authCallback);

export default router;
