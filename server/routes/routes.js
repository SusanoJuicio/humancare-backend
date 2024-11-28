import { Router } from 'express';
import { createUser, getUsers, getUser } from "../controllers/userControllers.js"

const router = Router();

router.route('/').get(getUsers);
router.route('/:id').get(getUser);
router.post("/", createUser)

export default router;