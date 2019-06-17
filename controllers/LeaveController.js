import LeaveService from '../services/LeaveService';
import Util from '../utils/Utils';

const util = new Util();

export default class LeaveController {
  static async getAllLeaves(req, res) {
    try {
      const allLeaves = await LeaveService.getAllLeaves();
      if (allLeaves.length > 0) {
        util.setSuccess(200, 'Leaves retrieved', allLeaves);
      } else {
        util.setSuccess(200, 'No Leave found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addLeave(req, res) {
    // if (!req.body.emp_lname || !req.body.emp_fname || !req.body.emp_gender || !req.body.emp_fname || !req.body.emp_gender) {
    //   util.setError(400, 'Please provide complete details');
    //   return util.send(res);
    // }
    const newLeave = req.body;
    console.log(newLeave);
    try {
      const createdLeave = await LeaveService.addLeave(newLeave);
      util.setSuccess(201, 'Leave Added!', createdLeave);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }
  static async getLeaveSetting(req, res) {
    try {
      const allLeaves = await LeaveService.getLeaveSetting();
      if (allLeaves.length > 0) {
        util.setSuccess(200, 'Leaves retrieved', allLeaves);
      } else {
        util.setSuccess(200, 'No Leave found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
  static async addLeaveSetting(req, res) {
    // if (!req.body.emp_lname || !req.body.emp_fname || !req.body.emp_gender || !req.body.emp_fname || !req.body.emp_gender) {
    //   util.setError(400, 'Please provide complete details');
    //   return util.send(res);
    // }
    const newLeaveSetting = req.body;
    console.log(newLeaveSetting);
    try {
      const createdLeave = await LeaveService.addLeaveSetting(newLeaveSetting);
      util.setSuccess(201, 'Leave Added!', createdLeave);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }
  static async updatedLeave(req, res) {
    const alteredLeave = req.body;
    const  id  = req.params.id;
    if (!(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updateLeave = await LeaveService.updateLeave(id, alteredLeave);
      if (!updateLeave) {
        util.setError(404, `Cannot find Leave with the id: ${id}`);
      } else {
        util.setSuccess(200, 'Leave updated', updateLeave);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getALeave(req, res) {
    const  id  = req.params.id;
    console.log(req.params.id);
    console.log(id);
    if (!(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theLeave = await LeaveService.getALeave(id);

      if (!theLeave) {
        util.setError(404, `Cannot find Leave with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found User', theLeave);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }
  
  static async getALeaveStatus(req, res) {
    const status  = req.params.status;
    console.log(req.params);
    console.log(status);
    if (!(status)) {
      util.setError(400, 'Please input a valid string value');
      return util.send(res);
    }

    try {
      const theLeave = await LeaveService.getALeaveStatus(status);

      if (!theLeave) {
        util.setError(404, `Cannot find Leave with the status ${status}`);
      } else {
        util.setSuccess(200, 'Found Leave', theLeave);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }
  static async deleteLeave(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const LeaveToDelete = await LeaveService.deleteLeave(id);

      if (LeaveToDelete) {
        util.setSuccess(200, 'Leave deleted');
      } else {
        util.setError(404, `Leave with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}
