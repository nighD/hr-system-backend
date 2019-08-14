import { Router } from 'express';
import Payroll_Type_Controller from '../controllers/Payroll_Type_Controller';

const router = Router();

router.get('/', Payroll_Type_Controller.getAllPayroll_Type);
router.post('/', Payroll_Type_Controller.addPayroll_Type);
router.get('/:id', Payroll_Type_Controller.getAPayroll_Type);
router.put('/:id', Payroll_Type_Controller.updatedPayroll_Type);
router.post('/getHours/Worked',Payroll_Type_Controller.getCurrentWorkedDay);
// router.delete('/:id', UserController.deleteUser);

export default router;