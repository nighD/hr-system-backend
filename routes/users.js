import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = Router();

router.get('/', UserController.getAllUsers);
router.get('/manager/', UserController.getManagers);
router.post('/', UserController.addUser);
router.get('/:id', UserController.getAUser);
router.put('/:id', UserController.updatedUser);
// router.delete('/:id', UserController.deleteUser);

export default router;