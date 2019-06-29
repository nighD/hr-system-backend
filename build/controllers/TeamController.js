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

var _TeamService = _interopRequireDefault(require("../services/TeamService"));

var _Utils = _interopRequireDefault(require("../utils/Utils"));

var util = new _Utils["default"]();

var TeamController =
/*#__PURE__*/
function () {
  function TeamController() {
    (0, _classCallCheck2["default"])(this, TeamController);
  }

  (0, _createClass2["default"])(TeamController, null, [{
    key: "getAllTeams",
    value: function () {
      var _getAllTeams = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res) {
        var allTeams;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _TeamService["default"].getAllTeams();

              case 3:
                allTeams = _context.sent;

                if (allTeams.length > 0) {
                  util.setSuccess(200, 'Teams retrieved', allTeams);
                } else {
                  util.setSuccess(200, 'No Team found');
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

      function getAllTeams(_x, _x2) {
        return _getAllTeams.apply(this, arguments);
      }

      return getAllTeams;
    }()
  }, {
    key: "addTeam",
    value: function () {
      var _addTeam = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(req, res) {
        var newTeam, createdTeam;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // if (!req.body.emp_lname || !req.body.emp_fname || !req.body.emp_gender || !req.body.emp_fname || !req.body.emp_gender) {
                //   util.setError(400, 'Please provide complete details');
                //   return util.send(res);
                // }
                newTeam = req.body;
                _context2.prev = 1;
                _context2.next = 4;
                return UserService.addTeam(newTeam);

              case 4:
                createdTeam = _context2.sent;
                util.setSuccess(201, 'Team Added!', createdTeam);
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

      function addTeam(_x3, _x4) {
        return _addTeam.apply(this, arguments);
      }

      return addTeam;
    }()
  }, {
    key: "updatedTeam",
    value: function () {
      var _updatedTeam = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(req, res) {
        var alteredTeam, id, updateTeam;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                alteredTeam = req.body;
                id = req.params.id;

                if (id) {
                  _context3.next = 5;
                  break;
                }

                util.setError(400, 'Please input a valid numeric value');
                return _context3.abrupt("return", util.send(res));

              case 5:
                _context3.prev = 5;
                _context3.next = 8;
                return _TeamService["default"].updateTeam(id, alteredTeam);

              case 8:
                updateTeam = _context3.sent;

                if (!updateTeam) {
                  util.setError(404, "Cannot find Team with the id: ".concat(id));
                } else {
                  util.setSuccess(200, 'Team updated', updateTeam);
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

      function updatedTeam(_x5, _x6) {
        return _updatedTeam.apply(this, arguments);
      }

      return updatedTeam;
    }()
  }, {
    key: "getATeam",
    value: function () {
      var _getATeam = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(req, res) {
        var id, theTeam;
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
                return _TeamService["default"].getATeam(id);

              case 9:
                theTeam = _context4.sent;

                if (!theTeam) {
                  util.setError(404, "Cannot find Team with the id ".concat(id));
                } else {
                  util.setSuccess(200, 'Found User', theTeam);
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

      function getATeam(_x7, _x8) {
        return _getATeam.apply(this, arguments);
      }

      return getATeam;
    }()
  }, {
    key: "getATeamManager",
    value: function () {
      var _getATeamManager = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(req, res) {
        var id, theTeam;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                id = req.params.id;

                if (id) {
                  _context5.next = 4;
                  break;
                }

                util.setError(400, 'Please input a valid numeric value');
                return _context5.abrupt("return", util.send(res));

              case 4:
                _context5.prev = 4;
                _context5.next = 7;
                return _TeamService["default"].getATeamManager(id);

              case 7:
                theTeam = _context5.sent;

                if (!theTeam) {
                  util.setError(404, "Cannot find Team Manager with the id ".concat(id));
                } else {
                  util.setSuccess(200, 'Found User', theTeam);
                }

                return _context5.abrupt("return", util.send(res));

              case 12:
                _context5.prev = 12;
                _context5.t0 = _context5["catch"](4);
                util.setError(404, _context5.t0);
                return _context5.abrupt("return", util.send(res));

              case 16:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[4, 12]]);
      }));

      function getATeamManager(_x9, _x10) {
        return _getATeamManager.apply(this, arguments);
      }

      return getATeamManager;
    }()
  }, {
    key: "deleteTeam",
    value: function () {
      var _deleteTeam = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee6(req, res) {
        var id, teamToDelete;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                id = req.params.id;

                if (Number(id)) {
                  _context6.next = 4;
                  break;
                }

                util.setError(400, 'Please provide a numeric value');
                return _context6.abrupt("return", util.send(res));

              case 4:
                _context6.prev = 4;
                _context6.next = 7;
                return _TeamService["default"].deleteTeam(id);

              case 7:
                teamToDelete = _context6.sent;

                if (teamToDelete) {
                  util.setSuccess(200, 'Team deleted');
                } else {
                  util.setError(404, "Team with the id ".concat(id, " cannot be found"));
                }

                return _context6.abrupt("return", util.send(res));

              case 12:
                _context6.prev = 12;
                _context6.t0 = _context6["catch"](4);
                util.setError(400, _context6.t0);
                return _context6.abrupt("return", util.send(res));

              case 16:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[4, 12]]);
      }));

      function deleteTeam(_x11, _x12) {
        return _deleteTeam.apply(this, arguments);
      }

      return deleteTeam;
    }()
  }]);
  return TeamController;
}();

exports["default"] = TeamController;
//# sourceMappingURL=TeamController.js.map