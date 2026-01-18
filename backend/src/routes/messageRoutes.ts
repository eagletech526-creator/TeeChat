import { Router } from "express";
import { ProtectRoute } from "../middleware/auth";
import { getMessages } from "../controllers/messageController";

const router = Router();

router.get("/chat/:chatId", ProtectRoute, getMessages);

export default router;
