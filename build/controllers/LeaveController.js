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

var _LeaveService = _interopRequireDefault(require("../services/LeaveService"));

var _Utils = _interopRequireDefault(require("../utils/Utils"));

var util = new _Utils["default"]();

var LeaveController =
/*#__PURE__*/
function () {
  function LeaveController() {
    (0, _classCallCheck2["default"])(this, LeaveController);
  }

  (0, _createClass2["default"])(LeaveController, null, [{
    key: "getAllLeaves",
    value: function () {
      var _getAllLeaves = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res) {
        var allLeaves;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _LeaveService["default"].getAllLeaves();

              case 3:
                allLeaves = _context.sent;

                if (allLeaves.length > 0) {
                  util.setSuccess(200, 'Leaves retrieved', allLeaves);
                } else {
                  util.setSuccess(200, 'No Leave found');
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

      function getAllLeaves(_x, _x2) {
        return _getAllLeaves.apply(this, arguments);
      }

      return getAllLeaves;
    }()
  }, {
    key: "addLeave",
    value: function () {
      var _addLeave = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(req, res) {
        var newLeave, createdLeave;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // if (!req.body.emp_lname || !req.body.emp_fname || !req.body.emp_gender || !req.body.emp_fname || !req.body.emp_gender) {
                //   util.setError(400, 'Please provide complete details');
                //   return util.send(res);
                // }
                newLeave = req.body;
                console.log(newLeave);
                _context2.prev = 2;
                _context2.next = 5;
                return _LeaveService["default"].addLeave(newLeave);

              case 5:
                createdLeave = _context2.sent;
                util.setSuccess(201, 'Leave Added!', createdLeave);
                return _context2.abrupt("return", util.send(res));

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](2);
                util.setError(400, _context2.t0.message);
                return _context2.abrupt("return", util.send(res));

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[2, 10]]);
      }));

      function addLeave(_x3, _x4) {
        return _addLeave.apply(this, arguments);
      }

      return addLeave;
    }()
  }, {
    key: "getLeaveSetting",
    value: function () {
      var _getLeaveSetting = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(req, res) {
        var allLeaves;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _LeaveService["default"].getLeaveSetting();

              case 3:
                allLeaves = _context3.sent;

                if (allLeaves.length > 0) {
                  util.setSuccess(200, 'Leaves retrieved', allLeaves);
                } else {
                  util.setSuccess(200, 'No Leave found');
                }

                return _context3.abrupt("return", util.send(res));

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](0);
                util.setError(400, _context3.t0);
                return _context3.abrupt("return", util.send(res));

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 8]]);
      }));

      function getLeaveSetting(_x5, _x6) {
        return _getLeaveSetting.apply(this, arguments);
      }

      return getLeaveSetting;
    }()
  }, {
    key: "addLeaveSetting",
    value: function () {
      var _addLeaveSetting = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(req, res) {
        var newLeaveSetting, createdLeave;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                // if (!req.body.emp_lname || !req.body.emp_fname || !req.body.emp_gender || !req.body.emp_fname || !req.body.emp_gender) {
                //   util.setError(400, 'Please provide complete details');
                //   return util.send(res);
                // }
                newLeaveSetting = req.body;
                console.log(newLeaveSetting);
                _context4.prev = 2;
                _context4.next = 5;
                return _LeaveService["default"].addLeaveSetting(newLeaveSetting);

              case 5:
                createdLeave = _context4.sent;
                util.setSuccess(201, 'Leave Added!', createdLeave);
                return _context4.abrupt("return", util.send(res));

              case 10:
                _context4.prev = 10;
                _context4.t0 = _context4["catch"](2);
                util.setError(400, _context4.t0.message);
                return _context4.abrupt("return", util.send(res));

              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[2, 10]]);
      }));

      function addLeaveSetting(_x7, _x8) {
        return _addLeaveSetting.apply(this, arguments);
      }

      return addLeaveSetting;
    }()
  }, {
    key: "updatedLeave",
    value: function () {
      var _updatedLeave = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(req, res) {
        var alteredLeave, id, updateLeave;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                alteredLeave = req.body;
                id = req.params.id;

                if (id) {
                  _context5.next = 5;
                  break;
                }

                util.setError(400, 'Please input a valid numeric value');
                return _context5.abrupt("return", util.send(res));

              case 5:
                _context5.prev = 5;
                _context5.next = 8;
                return _LeaveService["default"].updateLeave(id, alteredLeave);

              case 8:
                updateLeave = _context5.sent;

                if (!updateLeave) {
                  util.setError(404, "Cannot find Leave with the id: ".concat(id));
                } else {
                  util.setSuccess(200, 'Leave updated', updateLeave);
                }

                return _context5.abrupt("return", util.send(res));

              case 13:
                _context5.prev = 13;
                _context5.t0 = _context5["catch"](5);
                util.setError(404, _context5.t0);
                return _context5.abrupt("return", util.send(res));

              case 17:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[5, 13]]);
      }));

      function updatedLeave(_x9, _x10) {
        return _updatedLeave.apply(this, arguments);
      }

      return updatedLeave;
    }()
  }, {
    key: "getALeave",
    value: function () {
      var _getALeave = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee6(req, res) {
        var id, theLeave;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                id = req.params.id;
                console.log(req.params.id);
                console.log(id);

                if (id) {
                  _context6.next = 6;
                  break;
                }

                util.setError(400, 'Please input a valid numeric value');
                return _context6.abrupt("return", util.send(res));

              case 6:
                _context6.prev = 6;
                _context6.next = 9;
                return _LeaveService["default"].getALeave(id);

              case 9:
                theLeave = _context6.sent;

                if (!theLeave) {
                  util.setError(404, "Cannot find Leave with the id ".concat(id));
                } else {
                  util.setSuccess(200, 'Found User', theLeave);
                }

                return _context6.abrupt("return", util.send(res));

              case 14:
                _context6.prev = 14;
                _context6.t0 = _context6["catch"](6);
                util.setError(404, _context6.t0);
                return _context6.abrupt("return", util.send(res));

              case 18:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[6, 14]]);
      }));

      function getALeave(_x11, _x12) {
        return _getALeave.apply(this, arguments);
      }

      return getALeave;
    }()
  }, {
    key: "getALeaveStatus",
    value: function () {
      var _getALeaveStatus = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee7(req, res) {
        var status, theLeave;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                status = req.params.status;
                console.log(req.params);
                console.log(status);

                if (status) {
                  _context7.next = 6;
                  break;
                }

                util.setError(400, 'Please input a valid string value');
                return _context7.abrupt("return", util.send(res));

              case 6:
                _context7.prev = 6;
                _context7.next = 9;
                return _LeaveService["default"].getALeaveStatus(status);

              case 9:
                theLeave = _context7.sent;

                if (!theLeave) {
                  util.setError(404, "Cannot find Leave with the status ".concat(status));
                } else {
                  util.setSuccess(200, 'Found Leave', theLeave);
                }

                return _context7.abrupt("return", util.send(res));

              case 14:
                _context7.prev = 14;
                _context7.t0 = _context7["catch"](6);
                util.setError(404, _context7.t0);
                return _context7.abrupt("return", util.send(res));

              case 18:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[6, 14]]);
      }));

      function getALeaveStatus(_x13, _x14) {
        return _getALeaveStatus.apply(this, arguments);
      }

      return getALeaveStatus;
    }()
  }, {
    key: "deleteLeave",
    value: function () {
      var _deleteLeave = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee8(req, res) {
        var id, LeaveToDelete;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                id = req.params.id;

                if (Number(id)) {
                  _context8.next = 4;
                  break;
                }

                util.setError(400, 'Please provide a numeric value');
                return _context8.abrupt("return", util.send(res));

              case 4:
                _context8.prev = 4;
                _context8.next = 7;
                return _LeaveService["default"].deleteLeave(id);

              case 7:
                LeaveToDelete = _context8.sent;

                if (LeaveToDelete) {
                  util.setSuccess(200, 'Leave deleted');
                } else {
                  util.setError(404, "Leave with the id ".concat(id, " cannot be found"));
                }

                return _context8.abrupt("return", util.send(res));

              case 12:
                _context8.prev = 12;
                _context8.t0 = _context8["catch"](4);
                util.setError(400, _context8.t0);
                return _context8.abrupt("return", util.send(res));

              case 16:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, null, [[4, 12]]);
      }));

      function deleteLeave(_x15, _x16) {
        return _deleteLeave.apply(this, arguments);
      }

      return deleteLeave;
    }()
  }]);
  return LeaveController;
}();

exports["default"] = LeaveController;
//# sourceMappingURL=LeaveController.js.map