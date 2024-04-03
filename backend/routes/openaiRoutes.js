import express from "express";
import { generateImage } from "../controllers/imageController.js";
import { generateText } from "../controllers/textController.js";

const router = express.Router();

router.post('/chat', generateText);
router.post('/generateimage', generateImage);

export default router;
