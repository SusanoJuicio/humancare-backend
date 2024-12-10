import { Router } from 'express';
import { createUser, getUsers, getUser, loginUser, updateUserLevel } from "../controllers/userControllers.js";

const router = Router();

router.route('/').get(getUsers);
router.route('/:id').get(getUser);
router.post("/", createUser);
router.post("/login", loginUser);
router.put("/update-level/:id", updateUserLevel);

export default router;