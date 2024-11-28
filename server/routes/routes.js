import { Router } from 'express';
import { createUser, getUsers, getUser, loginUser } from "../controllers/userControllers.js";

const router = Router();

router.route('/').get(getUsers);
router.route('/:id').get(getUser);
router.post("/", createUser);
router.post("/login", loginUser);

export default router;