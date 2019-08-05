import { sequelize } from '../models';

// import database from '../src/models';
var database = require('../models');
const Op = database.sequelize.Op;
 class UserService {
  static async getAllUsers() {
    try {
      return await database.User_Info.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addUser(newUser) {
    try {
      return await database.User_Info.create(newUser);
    } catch (error) {
      throw error;
    }
  }

  static async updateUser(id, updateUser) {
    try {
      const UserToUpdate = await database.User_Info.findOne({
        where: { emp_uid: id }
      });

      if (UserToUpdate) {
        await database.User_Info.update(updateUser, { where: { emp_uid: Number(id) } });

        return updateUser;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAUser(id) {
    try {
      const theUser = await database.User_Info.findOne({
        where: { emp_uid: id }
      });

      return theUser;
    } catch (error) {
      throw error;
    }
  }

  static async getAUserByName(firstName) {
    console.log(firstName)
    
    try {
      const theUser = await database.sequelize.query(`select * from "User_Infos" where "User_Infos"."emp_fname" like '%`+firstName+`%' `, { type: sequelize.QueryTypes.SELECT});
      return theUser;
    } catch (error) {
      throw error;
    }
  }

  static async getManagers() {
    try {
      const theUser = await database.User_Info.findAll({
        where: { emp_role: 'manager' }
      });

      return theUser;
    } catch (error) {
      throw error;
    }
  }

  static async deleteUser(id) {
    try {
      const UserToDelete = await database.User_Info.findOne({ where: { emp_uid: Number(id) } });

      if (UserToDelete) {
        const deletedUser = await database.User_Info.destroy({
          where: { emp_uid: id }
        });
        return deletedUser;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}
export default UserService;
