"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _UserService = _interopRequireDefault(require("../services/UserService"));

var _Utils = _interopRequireDefault(require("../utils/Utils"));

var util = new _Utils["default"]();

var UserController =
/*#__PURE__*/
function () {
  function UserController() {
    (0, _classCallCheck2["default"])(this, UserController);
  }

  (0, _createClass2["default"])(UserController, null, [{
    key: "getAllUsers",
    value: function () {
      var _getAllUsers = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res) {
        var allUsers;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _UserService["default"].getAllUsers();

              case 3:
                allUsers = _context.sent;

                if (allUsers.length > 0) {
                  util.setSuccess(200, 'Users retrieved', allUsers);
                } else {
                  util.setSuccess(200, 'No User found');
                }

                return _context.abrupt("return", util.send(res));

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                util.setError(400, _context.t0);
                return _context.abrupt("return", util.send(res));

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));

      function getAllUsers(_x, _x2) {
        return _getAllUsers.apply(this, arguments);
      }

      return getAllUsers;
    }()
  }, {
    key: "addUser",
    value: function () {
      var _addUser = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(req, res) {
        var newUser, createdUser;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // if (!req.body.emp_lname || !req.body.emp_fname || !req.body.emp_gender || !req.body.emp_fname || !req.body.emp_gender) {
                //   util.setError(400, 'Please provide complete details');
                //   return util.send(res);
                // }
                newUser = req.body;
                _context2.prev = 1;
                _context2.next = 4;
                return _UserService["default"].addUser(newUser);

              case 4:
                createdUser = _context2.sent;
                util.setSuccess(201, 'Book Added!', createdUser);
                return _context2.abrupt("return", util.send(res));

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](1);
                util.setError(400, _context2.t0.message);
                return _context2.abrupt("return", util.send(res));

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 9]]);
      }));

      function addUser(_x3, _x4) {
        return _addUser.apply(this, arguments);
      }

      return addUser;
    }()
  }, {
    key: "updatedUser",
    value: function () {
      var _updatedUser = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(req, res) {
        var alteredUser, id, updateUser;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                alteredUser = req.body;
                id = req.params.id.id;

                if (id) {
                  _context3.next = 5;
                  break;
                }

                util.setError(400, 'Please input a valid numeric value');
                return _context3.abrupt("return", util.send(res));

              case 5:
                _context3.prev = 5;
                _context3.next = 8;
                return _UserService["default"].updateUser(id, alteredUser);

              case 8:
                updateUser = _context3.sent;

                if (!updateUser) {
                  util.setError(404, "Cannot find User with the id: ".concat(id));
                } else {
                  util.setSuccess(200, 'Book updated', updateUser);
                }

                return _context3.abrupt("return", util.send(res));

              case 13:
                _context3.prev = 13;
                _context3.t0 = _context3["catch"](5);
                util.setError(404, _context3.t0);
                return _context3.abrupt("return", util.send(res));

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[5, 13]]);
      }));

      function updatedUser(_x5, _x6) {
        return _updatedUser.apply(this, arguments);
      }

      return updatedUser;
    }()
  }, {
    key: "getAUser",
    value: function () {
      var _getAUser = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(req, res) {
        var id, theUser;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                id = req.params.id;
                console.log(req.params.id);
                console.log(id);

                if (id) {
                  _context4.next = 6;
                  break;
                }

                util.setError(400, 'Please input a valid numeric value');
                return _context4.abrupt("return", util.send(res));

              case 6:
                _context4.prev = 6;
                _context4.next = 9;
                return _UserService["default"].getAUser(id);

              case 9:
                theUser = _context4.sent;

                if (!theUser) {
                  util.setError(404, "Cannot find User with the id ".concat(id));
                } else {
                  util.setSuccess(200, 'Found User', theUser);
                }

                return _context4.abrupt("return", util.send(res));

              case 14:
                _context4.prev = 14;
                _context4.t0 = _context4["catch"](6);
                util.setError(404, _context4.t0);
                return _context4.abrupt("return", util.send(res));

              case 18:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[6, 14]]);
      }));

      function getAUser(_x7, _x8) {
        return _getAUser.apply(this, arguments);
      }

      return getAUser;
    }()
  }, {
    key: "getManagers",
    value: function () {
      var _getManagers = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(req, res) {
        var theUser;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _UserService["default"].getManagers();

              case 3:
                theUser = _context5.sent;

                if (!theUser) {
                  util.setError(404, "Cannot find managers");
                } else {
                  util.setSuccess(200, 'Found Managers', theUser);
                }

                return _context5.abrupt("return", util.send(res));

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](0);
                util.setError(404, _context5.t0);
                return _context5.abrupt("return", util.send(res));

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 8]]);
      }));

      function getManagers(_x9, _x10) {
        return _getManagers.apply(this, arguments);
      }

      return getManagers;
    }() // static async deleteBook(req, res) {
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

  }]);
  return UserController;
}(); // const User_Info = require('../models').User_Info;
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


exports["default"] = UserController;
//# sourceMappingURL=UserController.js.map