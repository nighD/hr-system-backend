import Payroll_Type_Service from '../services/Payroll_Type_Service';
import Util from '../utils/Utils';

const util = new Util();

export default class Payroll_Type_Controller {
  static async getAllPayroll_Type(req, res) {
    try {
      
      const allPayroll_Types = await Payroll_Type_Service.getAllPayroll_Type();
      console.log(allPayroll_Types);
      if (allPayroll_Types.length > 0) {
        util.setSuccess(200, 'Payroll Types retrieved', allPayroll_Types);
      } else {
        util.setSuccess(200, 'No Payroll Type found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
  static async getCurrentWorkedDay(req, res) {
    console.log("here");
    const  id  = req.body.id;
    const  month  = req.body.month;
    if (!(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const getCurrentWorkedDayID = await Payroll_Type_Service.getCurrentWorkedDay(id, month);
      if (!getCurrentWorkedDayID) {
        util.setError(404, `Cannot find Payroll Type with the id: ${id}`);
      } else {
        util.setSuccess(200, 'Payroll Type updated',getCurrentWorkedDayID);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async addPayroll_Type(req, res) {
    // if (!req.body.emp_lname || !req.body.emp_fname || !req.body.emp_gender || !req.body.emp_fname || !req.body.emp_gender) {
    //   util.setError(400, 'Please provide complete details');
    //   return util.send(res);
    // }
    const newPayroll_Type = req.body;
    try {
      const createdPayroll_Type = await Payroll_Type_Service.add_Payroll_Type(newPayroll_Type);
      util.setSuccess(201, 'Payroll Type Added!', createdPayroll_Type);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedPayroll_Type(req, res) {
    const alteredPayroll_Type = req.body;
    const { id } = req.params.id;
    if (!(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updatePayroll_Type = await Payroll_Type_Service.update_Payroll_Type(id, alteredPayroll_Type);
      if (!updatePayroll_Type) {
        util.setError(404, `Cannot find Payroll Type with the id: ${id}`);
      } else {
        util.setSuccess(200, 'Payroll Type updated', updatePayroll_Type);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAPayroll_Type(req, res) {
    const  id  = req.params.id;

    if (!(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const thePayroll_Type = await Payroll_Type_Service.getAPayroll_Type(id);

      if (!thePayroll_Type) {
        util.setError(404, `Cannot find Payroll Type with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found Payroll Type', thePayroll_Type);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

//   static async getAUserByName(req, res) {
//     const  firstName  = req.params.name;
//     if (!(firstName)) {
//       util.setError(400, 'Please input a valid numeric value');
//       return util.send(res);
//     }

//     try {
//       const theUser = await UserService.getAUserByName(firstName);

//       if (!theUser) {
//         util.setError(404, `Cannot find User with the first name ${firstName}`);
//       } else {
//         util.setSuccess(200, 'Found User', theUser);
//       }
//       return util.send(res);
//     } catch (error) {
//       util.setError(404, error);
//       return util.send(res);
//     }
//   }

//   static async getManagers(req, res) {
//     // const  id  = req.params.id;
//     // if (!(id)) {
//     //   util.setError(400, 'Please input a valid numeric value');
//     //   return util.send(res);
//     // }

//     try {
//       const theUser = await UserService.getManagers();

//       if (!theUser) {
//         util.setError(404, `Cannot find managers`);
//       } else {
//         util.setSuccess(200, 'Found Managers', theUser);
//       }
//       return util.send(res);
//     } catch (error) {
//       util.setError(404, error);
//       return util.send(res);
//     }
//   }
  // static async deleteBook(req, res) {
  //   const { id } = req.params;

  //   if (!Number(id)) {
  //     util.setError(400, 'Please provide a numeric value');
  //     return util.send(res);
  //   }

  //   try {
  //     const bookToDelete = await BookService.deleteBook(id);

  //     if (bookToDelete) {
  //       util.setSuccess(200, 'Book deleted');
  //     } else {
  //       util.setError(404, `Book with the id ${id} cannot be found`);
  //     }
  //     return util.send(res);
  //   } catch (error) {
  //     util.setError(400, error);
  //     return util.send(res);
  //   }
  // }
}
// const User_Info = require('../models').User_Info;
// const Team_Info= require('../models').Team_Info;

// module.exports = {
//   list(req, res) {
//     return User_Info
//       .findAll()
//       .then((users) => res.status(200).send(users))
//       .catch((error) => { res.status(400).send(error); });
//   },

//   getById(req, res) {
//     return User_Info
//       .findAll({
//         where: {
//           emp_uid: req.params.id
//         }}
//       )
//       .then((user) => {
//         if (!user) {
//           return res.status(404).send({
//             message: 'user Not Found',
//           });
//         }
//         return res.status(200).send(user);
//       })
//       .catch((error) => res.status(400).send(error));
//   },

//   add(req, res) {
//     return User_Info
//       .create({
//         emp_lname: req.body.emp_lname,
//         emp_fname: req.body.emp_fname,
//         emp_gender: req.body.emp_gender,
//         emp_email: req.body.emp_email,
//         emp_avatar: req.body.emp_avatar,
//         emp_role: req.body.emp_role,
//         teamid: req.body.teamid,
//         emp_status: req.body.emp_status,
//         emp_dob: req.body.emp_dob,
//         emp_pass: req.body.emp_pass,
//         emp_street: req.body.emp_street,
//         emp_phone: req.body.emp_phone,
//         emp_city: req.body.emp_city,
//         emp_postal: req.body.emp_postal,
//         emp_country: req.body.emp_country,
//         emp_uid: req.body.emp_uid
//       })
//       .then((user) => {
//           res.status(201).send(user)},
//           // console.log(user)

//       )
//       .catch((error) => res.status(400).send(error));
//   },

//   update(req, res) {
//     return User_Info
//       .update(
//         {
//           emp_lname: req.body.emp_lname,
//           emp_fname: req.body.emp_fname,
//           emp_gender: req.body.emp_gender,
//           emp_email: req.body.emp_email,
//           emp_avatar: req.body.emp_avatar,
//           emp_role: req.body.emp_role,
//           teamid: req.body.teamid,
//           emp_status: req.body.emp_status,
//           emp_dob: req.body.emp_dob,
//           emp_pass: req.body.emp_pass,
//           emp_street: req.body.emp_street,
//           emp_phone: req.body.emp_phone,
//           emp_city: req.body.emp_city,
//           emp_postal: req.body.emp_postal,
//           emp_country: req.body.emp_country,
//           emp_uid: req.body.emp_uid
//         },{
//         where: {
//           emp_uid: req.params.id
//         }
//       }
//       )
//       .then(user => {
//         console.log(user.emp_fname);
//         res.status(200).send(user);
//       })
//       .catch((error) => res.status(400).send(error));
//   },

//   delete(req, res) {
//     return User_Info
//       .findByPk(req.params.id)
//       .then(user => {
//         if (!user) {
//           return res.status(400).send({
//             message: 'user Not Found',
//           });
//         }
//         return user
//           .destroy()
//           .then(() => res.status(204).send())
//           .catch((error) => res.status(400).send(error));
//       })
//       .catch((error) => res.status(400).send(error));
//   },
// };