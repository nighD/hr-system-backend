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

var TeamService =
/*#__PURE__*/
function () {
  function TeamService() {
    (0, _classCallCheck2["default"])(this, TeamService);
  }

  (0, _createClass2["default"])(TeamService, null, [{
    key: "getAllTeams",
    value: function () {
      var _getAllTeams = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return database.Team_Info.findAll({
                  include: [{
                    model: database.User_Info
                  }]
                });

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

      function getAllTeams() {
        return _getAllTeams.apply(this, arguments);
      }

      return getAllTeams;
    }()
  }, {
    key: "addTeam",
    value: function () {
      var _addTeam = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(newTeam) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return database.Team_Info.create(newTeam);

              case 3:
                return _context2.abrupt("return", _context2.sent);

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                throw _context2.t0;

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 6]]);
      }));

      function addTeam(_x) {
        return _addTeam.apply(this, arguments);
      }

      return addTeam;
    }()
  }, {
    key: "updateTeam",
    value: function () {
      var _updateTeam2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(id, _updateTeam) {
        var TeamToUpdate;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return database.Team_Info.findOne({
                  where: {
                    id: id
                  }
                });

              case 3:
                TeamToUpdate = _context3.sent;

                if (!TeamToUpdate) {
                  _context3.next = 8;
                  break;
                }

                _context3.next = 7;
                return database.Team_Info.update(_updateTeam, {
                  where: {
                    id: id
                  }
                });

              case 7:
                return _context3.abrupt("return", updateUser);

              case 8:
                return _context3.abrupt("return", null);

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](0);
                throw _context3.t0;

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 11]]);
      }));

      function updateTeam(_x2, _x3) {
        return _updateTeam2.apply(this, arguments);
      }

      return updateTeam;
    }()
  }, {
    key: "getATeam",
    value: function () {
      var _getATeam = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(id) {
        var theTeam;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return database.Team_Info.findAll({
                  where: {
                    id: id
                  },
                  include: [{
                    model: database.User_Info
                  }]
                });

              case 3:
                theTeam = _context4.sent;
                return _context4.abrupt("return", theTeam);

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](0);
                throw _context4.t0;

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 7]]);
      }));

      function getATeam(_x4) {
        return _getATeam.apply(this, arguments);
      }

      return getATeam;
    }()
  }, {
    key: "getATeamManager",
    value: function () {
      var _getATeamManager = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(id) {
        var theTeam;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return database.Team_Info.findAll({
                  where: {
                    id: id
                  },
                  include: [{
                    model: database.User_Info,
                    where: {
                      emp_role: 'manager'
                    }
                  }]
                });

              case 3:
                theTeam = _context5.sent;
                return _context5.abrupt("return", theTeam);

              case 7:
                _context5.prev = 7;
                _context5.t0 = _context5["catch"](0);
                throw _context5.t0;

              case 10:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 7]]);
      }));

      function getATeamManager(_x5) {
        return _getATeamManager.apply(this, arguments);
      }

      return getATeamManager;
    }()
  }, {
    key: "deleteTeam",
    value: function () {
      var _deleteTeam = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee6(id) {
        var TeamToDelete, deletedTeam;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return database.Team_Info.findOne({
                  where: {
                    id: id
                  }
                });

              case 3:
                TeamToDelete = _context6.sent;

                if (!TeamToDelete) {
                  _context6.next = 9;
                  break;
                }

                _context6.next = 7;
                return database.Team_Info.destroy({
                  where: {
                    id: id
                  }
                });

              case 7:
                deletedTeam = _context6.sent;
                return _context6.abrupt("return", deletedTeam);

              case 9:
                return _context6.abrupt("return", null);

              case 12:
                _context6.prev = 12;
                _context6.t0 = _context6["catch"](0);
                throw _context6.t0;

              case 15:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 12]]);
      }));

      function deleteTeam(_x6) {
        return _deleteTeam.apply(this, arguments);
      }

      return deleteTeam;
    }()
  }]);
  return TeamService;
}();

var _default = TeamService;
exports["default"] = _default;
//# sourceMappingURL=TeamService.js.map