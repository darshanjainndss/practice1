import express from "express";
import { displayUsers } from "../controller/createuser.js";
import { createUser } from "../controller/createuser.js";

const router = express.Router();

// GET /api/users/display
router.get("/display", displayUsers);

// POST /api/users/create
router.post("/create", createUser);

export default router;
