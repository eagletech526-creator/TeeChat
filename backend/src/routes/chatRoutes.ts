import { Router } from "express";

import { getChats, getOrCreateChat } from "../controllers/chatController";
import { ProtectRoute } from "../middleware/auth";

const router = Router();

router.use(ProtectRoute);

router.get("/", getChats);
router.post("/with/:participantId", getOrCreateChat);

export default router;
