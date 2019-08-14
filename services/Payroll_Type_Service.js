import { sequelize } from '../models';

// import database from '../src/models';
var database = require('../models');
const Op = database.sequelize.Op;

 class Payroll_Type_Service {
  static async getAllPayroll_Type() {
    try {
      return await database.Payroll_Type.findAll(query);
    } catch (error) {
      console.log("wrong here");
      throw error;
    }
  }
  static async getCurrentWorkedDay(id,month) {
    try {
      return await sequelize.query("select count(1) from emp_att_details where (date_att between '2019-" + month+"-01' and '2019-"+month+"-30') and (emp_uid = '"+id+ "');");
    } catch (error) {
      console.log("wrong here");
      throw error;
    }
  }
  static async add_Payroll_Type(new_payroll_type) {
    try {
      return await database.Payroll_Type.create(new_payroll_type);
    } catch (error) {
      throw error;
    }
  }

  static async update_Payroll_Type(id, update_Payroll_Type) {
    try {
      const Payroll_Type_ToUpdate = await database.Payroll_Type.findOne({
        where: { emp_uid: id }
      });

      if (update_Payroll_Type) {
        await database.Payroll_Type.update(Payroll_Type_ToUpdate, { where: { emp_uid: Number(id) } });

        return Payroll_Type_ToUpdate;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAPayroll_Type(id) {
    try {
      const thePayroll_Type = await database.Payroll_Type.findOne({
        where: { emp_uid: id }
      });

      return thePayroll_Type;
    } catch (error) {
      throw error;
    }
  }

//   static async getAUserByName(firstName) {
//     console.log(firstName)
    
//     try {
//       const theUser = await database.sequelize.query(`select * from "User_Infos" where "User_Infos"."emp_fname" like '%`+firstName+`%' `, { type: sequelize.QueryTypes.SELECT});
//       return theUser;
//     } catch (error) {
//       throw error;
//     }
//   }

//   static async getManagers() {
//     try {
//       const theUser = await database.User_Info.findAll({
//         where: { emp_role: 'manager' }
//       });

//       return theUser;
//     } catch (error) {
//       throw error;
//     }
//   }

  static async deletePayroll_Type(id) {
    try {
      const Payroll_TypeToDelete = await database.Payroll_Type.findOne({ where: { emp_uid: Number(id) } });

      if (Payroll_TypeToDelete) {
        const deletedPayroll_Type = await database.Payroll_Type.destroy({
          where: { emp_uid: id }
        });
        return deletedPayroll_Type;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}
export default Payroll_Type_Service;
