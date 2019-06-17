// import database from '../src/models';
// const User_Info = require('../models').User_Info;
var database = require('../models');
 class LeaveService {
  static async getAllLeaves() {
    try {
      return await database.Leaves.findAll({

      });
    } catch (error) {
      throw error;
    }
  }

  static async addLeave(newLeave) {
    console.log(newLeave);
    try {
      return await database.Leaves.create(newLeave);
    } catch (error) {
      throw error;
    }
  }
  static async getLeaveSetting() {
    try {
      return await database.LeaveSetting.findAll({

      });
    } catch (error) {
      throw error;
    }
  }
  static async addLeaveSetting(newLeaveSetting) {
    console.log(newLeaveSetting);
    try {
        const LeaveToDelete = await database.LeaveSetting.findOne({ where: { id: 1 } });
        if (LeaveToDelete) {
          await database.LeaveSetting.truncate({
            restartIdentity: true
          });
        }
      } catch (error) {
        throw error;
      }
    try {
      return await database.LeaveSetting.create(newLeaveSetting);
    } catch (error) {
      throw error;
    }
  }
  static async updateLeave(id, updateLeave) {
    try {
      const LeaveToUpdate = await database.Leaves.findOne({
        where: { id: id }
      });

      if (LeaveToUpdate) {
        await database.Leaves.update(updateLeave, { where: { id: id } });

        return updateUser;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getALeave(id) {
    try {
      const theLeave = await database.Leaves.findAll({
        where: {emp_uid: id},
      });
      console.log(theLeave);

      return theLeave;
    } catch (error) {
      throw error;
    }
  }
  

  static async getALeaveStatus(status) {
    status = String(status).charAt(0).toUpperCase()+status.slice(1);
    try {
      let theLeave = await database.Leaves.findAll({
        where: {status: status},
      })
      return theLeave;
    } catch (error) {
      throw error;
    }
  }  

  static async deleteLeave(id) {
    try {
      const LeaveToDelete = await database.Leaves.findOne({ where: { id: id } });

      if (LeaveToDelete) {
        const deletedLeave = await database.Leaves.destroy({
          where: { id: id }
        });
        return deletedLeave;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}
export default LeaveService;
