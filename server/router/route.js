import { Router } from 'express'
import { login, register, search } from '../controller/UserController.js';
const router = Router();

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/search').get(search)

export default router