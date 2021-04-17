// adding comment to be able to push
import express from "express";

import { getCourseTimes, createTime } from "../controllers/times.js";

const router = express.Router();

router.get("/times", getCourseTimes);
router.post("/createTime", createTime);

export default router;