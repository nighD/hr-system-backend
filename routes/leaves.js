import { Router } from 'express';
import LeaveController from '../controllers/LeaveController';

const router = Router();

router.get('/', LeaveController.getAllLeaves);
router.post('/', LeaveController.addLeave);
router.get('/setting/', LeaveController.getLeaveSetting);
router.post('/setting/', LeaveController.addLeaveSetting);
router.get('/:id', LeaveController.getALeave);
router.get('/status/:status', LeaveController.getALeaveStatus);
router.put('/:id', LeaveController.updatedLeave);
// router.delete('/:id', LeaveController.deleteLeave);

export default router;