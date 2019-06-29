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

// import database from '../src/models';
// const User_Info = require('../models').User_Info;
var database = require('../models');

var LeaveService =
/*#__PURE__*/
function () {
  function LeaveService() {
    (0, _classCallCheck2["default"])(this, LeaveService);
  }

  (0, _createClass2["default"])(LeaveService, null, [{
    key: "getAllLeaves",
    value: function () {
      var _getAllLeaves = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return database.Leaves.findAll({});

              case 3:
                return _context.abrupt("return", _context.sent);

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                throw _context.t0;

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 6]]);
      }));

      function getAllLeaves() {
        return _getAllLeaves.apply(this, arguments);
      }

      return getAllLeaves;
    }()
  }, {
    key: "addLeave",
    value: function () {
      var _addLeave = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(newLeave) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log(newLeave);
                _context2.prev = 1;
                _context2.next = 4;
                return database.Leaves.create(newLeave);

              case 4:
                return _context2.abrupt("return", _context2.sent);

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](1);
                throw _context2.t0;

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 7]]);
      }));

      function addLeave(_x) {
        return _addLeave.apply(this, arguments);
      }

      return addLeave;
    }()
  }, {
    key: "getLeaveSetting",
    value: function () {
      var _getLeaveSetting = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3() {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return database.LeaveSetting.findAll({});

              case 3:
                return _context3.abrupt("return", _context3.sent);

              case 6:
                _context3.prev = 6;
                _context3.t0 = _context3["catch"](0);
                throw _context3.t0;

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 6]]);
      }));

      function getLeaveSetting() {
        return _getLeaveSetting.apply(this, arguments);
      }

      return getLeaveSetting;
    }()
  }, {
    key: "addLeaveSetting",
    value: function () {
      var _addLeaveSetting = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(newLeaveSetting) {
        var LeaveToDelete;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                console.log(newLeaveSetting);
                _context4.prev = 1;
                _context4.next = 4;
                return database.LeaveSetting.findOne({
                  where: {
                    id: 1
                  }
                });

              case 4:
                LeaveToDelete = _context4.sent;

                if (!LeaveToDelete) {
                  _context4.next = 8;
                  break;
                }

                _context4.next = 8;
                return database.LeaveSetting.truncate({
                  restartIdentity: true
                });

              case 8:
                _context4.next = 13;
                break;

              case 10:
                _context4.prev = 10;
                _context4.t0 = _context4["catch"](1);
                throw _context4.t0;

              case 13:
                _context4.prev = 13;
                _context4.next = 16;
                return database.LeaveSetting.create(newLeaveSetting);

              case 16:
                return _context4.abrupt("return", _context4.sent);

              case 19:
                _context4.prev = 19;
                _context4.t1 = _context4["catch"](13);
                throw _context4.t1;

              case 22:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[1, 10], [13, 19]]);
      }));

      function addLeaveSetting(_x2) {
        return _addLeaveSetting.apply(this, arguments);
      }

      return addLeaveSetting;
    }()
  }, {
    key: "updateLeave",
    value: function () {
      var _updateLeave2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(id, _updateLeave) {
        var LeaveToUpdate;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return database.Leaves.findOne({
                  where: {
                    id: id
                  }
                });

              case 3:
                LeaveToUpdate = _context5.sent;

                if (!LeaveToUpdate) {
                  _context5.next = 8;
                  break;
                }

                _context5.next = 7;
                return database.Leaves.update(_updateLeave, {
                  where: {
                    id: id
                  }
                });

              case 7:
                return _context5.abrupt("return", updateUser);

              case 8:
                return _context5.abrupt("return", null);

              case 11:
                _context5.prev = 11;
                _context5.t0 = _context5["catch"](0);
                throw _context5.t0;

              case 14:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 11]]);
      }));

      function updateLeave(_x3, _x4) {
        return _updateLeave2.apply(this, arguments);
      }

      return updateLeave;
    }()
  }, {
    key: "getALeave",
    value: function () {
      var _getALeave = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee6(id) {
        var theLeave;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return database.Leaves.findAll({
                  where: {
                    emp_uid: id
                  }
                });

              case 3:
                theLeave = _context6.sent;
                console.log(theLeave);
                return _context6.abrupt("return", theLeave);

              case 8:
                _context6.prev = 8;
                _context6.t0 = _context6["catch"](0);
                throw _context6.t0;

              case 11:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 8]]);
      }));

      function getALeave(_x5) {
        return _getALeave.apply(this, arguments);
      }

      return getALeave;
    }()
  }, {
    key: "getALeaveStatus",
    value: function () {
      var _getALeaveStatus = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee7(status) {
        var theLeave;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                status = String(status).charAt(0).toUpperCase() + status.slice(1);
                _context7.prev = 1;
                _context7.next = 4;
                return database.Leaves.findAll({
                  where: {
                    status: status
                  }
                });

              case 4:
                theLeave = _context7.sent;
                return _context7.abrupt("return", theLeave);

              case 8:
                _context7.prev = 8;
                _context7.t0 = _context7["catch"](1);
                throw _context7.t0;

              case 11:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[1, 8]]);
      }));

      function getALeaveStatus(_x6) {
        return _getALeaveStatus.apply(this, arguments);
      }

      return getALeaveStatus;
    }()
  }, {
    key: "deleteLeave",
    value: function () {
      var _deleteLeave = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee8(id) {
        var LeaveToDelete, deletedLeave;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                _context8.next = 3;
                return database.Leaves.findOne({
                  where: {
                    id: id
                  }
                });

              case 3:
                LeaveToDelete = _context8.sent;

                if (!LeaveToDelete) {
                  _context8.next = 9;
                  break;
                }

                _context8.next = 7;
                return database.Leaves.destroy({
                  where: {
                    id: id
                  }
                });

              case 7:
                deletedLeave = _context8.sent;
                return _context8.abrupt("return", deletedLeave);

              case 9:
                return _context8.abrupt("return", null);

              case 12:
                _context8.prev = 12;
                _context8.t0 = _context8["catch"](0);
                throw _context8.t0;

              case 15:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, null, [[0, 12]]);
      }));

      function deleteLeave(_x7) {
        return _deleteLeave.apply(this, arguments);
      }

      return deleteLeave;
    }()
  }]);
  return LeaveService;
}();

var _default = LeaveService;
exports["default"] = _default;
//# sourceMappingURL=LeaveService.js.map