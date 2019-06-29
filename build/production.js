"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _users = _interopRequireDefault(require("./routes/users"));

var _index = _interopRequireDefault(require("./routes/index"));

var _teams = _interopRequireDefault(require("./routes/teams"));

var _leaves = _interopRequireDefault(require("./routes/leaves"));

var createError = require('http-errors');

var express = require('express');

var path = require('path');

var cookieParser = require('cookie-parser');

var logger = require('morgan'); // var indexRouter = require('./routes/index');


var scheduler = require('./scheduler');

var app = express();
app.locals.moment = require('moment'); // view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express["static"](path.join(__dirname, 'public')));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3001");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/', _index["default"]);
app.use('/api/users', _users["default"]);
app.use('/api/teams', _teams["default"]);
app.use('/api/leaves', _leaves["default"]); // catch 404 and forward to error handler

app.use(function (req, res, next) {
  next(createError(404));
}); // error handler

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}; // render the error page

  res.status(err.status || 500);
  res.render('error');
});
scheduler.start();
module.exports = app;
"use strict";

module.exports = {
  development: {
    username: "me",
    password: "admin",
    database: "my_database",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: "postgres"
  }
};
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
"use strict";

var emp_att_detail = require('../models').emp_att_detail;

module.exports = {
  getById: function getById(req, res) {
    return emp_att_detail.findAll({
      where: {
        emp_uid: req.params.id
      }
    }).then(function (detail) {
      if (!detail) {
        return res.status(404).send({
          message: 'user Not Found'
        });
      }

      return res.status(200).send(detail);
    })["catch"](function (error) {
      return res.status(400).send(detail);
    });
  },
  add: function add(req, res) {
    return emp_att_detail.create({
      emp_uid: req.body.emp_uid,
      date_att: req.body.date_att,
      duration: req.body.duration,
      note: req.body.note,
      start_time: req.body.start_time,
      end_time: req.body.end_time
    }).then(function (detail) {
      res.status(201).send(detail);
    } // console.log(user)
    )["catch"](function (error) {
      return res.status(400).send(error);
    });
  }
};
"use strict";

var events = require('../models').events;

module.exports = {
  getById: function getById(req, res) {
    return events.findAll().then(function (detail) {
      if (!detail) {
        return res.status(404).send({
          message: 'user Not Found'
        });
      }

      return res.status(200).send(detail);
    })["catch"](function (error) {
      return res.status(400).send(detail);
    });
  },
  list: function list(req, res) {
    return events.findAll().tap(console.log); //   .then(event => (
    //       event))
    //   .catch((error) => error);
  },
  add: function add(req, res) {
    return events.create({
      members: req.body.members,
      date_att: req.body.date_att,
      title: req.body.title,
      start_time: req.body.start,
      end_time: req.body.end,
      notification: req.body.notification
    }).then(function (detail) {
      res.status(201).send(detail);
    } // console.log(user)
    )["catch"](function (error) {
      return res.status(400).send(error);
    });
  }
};
"use strict";

var team_info = require('./team_info'); // const user_info = require('./UserController');


var emp_att_detail = require('./emp_att_detail');

var events = require('./events');

module.exports = {
  team_info: team_info,
  // user_info,
  emp_att_detail: emp_att_detail,
  events: events
};
"use strict";

var User_Info = require('../models').User_Info;

var Team_Info = require('../models').Team_Info;

module.exports = {
  list: function list(req, res) {
    return Team_Info.findAll({
      include: [{
        model: User_Info
      }],
      order: [['createdAt', 'DESC'], [{
        model: User_Info
      }, 'createdAt', 'DESC']]
    }).then(function (team_infos) {
      return res.status(200).send(team_infos);
    })["catch"](function (error) {
      res.status(400).send(error);
    });
  },
  getById: function getById(req, res) {
    return Team_Info.findByPk(req.params.id, {
      include: [{
        model: User_Info
      }]
    }).then(function (team) {
      if (!team) {
        return res.status(404).send({
          message: 'Team Not Found'
        });
      }

      return res.status(200).send(team);
    })["catch"](function (error) {
      return res.status(400).send(error);
    });
  },
  add: function add(req, res) {
    return Team_Info.create({
      team_name: req.body.team_name,
      team_dis: req.body.team_dis,
      team_status: req.body.team_status
    }).then(function (team) {
      return res.status(201).send(team);
    })["catch"](function (error) {
      return res.status(400).send(error);
    });
  },
  update: function update(req, res) {
    return Team_Info.findByPk(req.params.id, {
      include: [{
        model: User_Info,
        as: 'members'
      }]
    }).then(function (team) {
      if (!team) {
        return res.status(404).send({
          message: 'Team Not Found'
        });
      }

      return team.update({
        team_name: req.body.team_name || team.team_name
      }).then(function () {
        return res.status(200).send(team);
      })["catch"](function (error) {
        return res.status(400).send(error);
      });
    })["catch"](function (error) {
      return res.status(400).send(error);
    });
  },
  "delete": function _delete(req, res) {
    return Team_Info.findByPk(req.params.id).then(function (team) {
      if (!team) {
        return res.status(400).send({
          message: 'Team Not Found'
        });
      }

      return Team_Info.destroy().then(function () {
        return res.status(204).send();
      })["catch"](function (error) {
        return res.status(400).send(error);
      });
    })["catch"](function (error) {
      return res.status(400).send(error);
    });
  },
  addWithUsers: function addWithUsers(req, res) {
    return Team_Info.create({
      team_name: req.body.team_name,
      members: req.body.members
    }, {
      include: [{
        model: User_Info,
        as: 'members'
      }]
    }).then(function (team) {
      return res.status(201).send(team);
    })["catch"](function (error) {
      return res.status(400).send(error);
    });
  }
};
'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('User_Infos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      emp_lname: {
        type: Sequelize.STRING
      },
      emp_fname: {
        type: Sequelize.STRING
      },
      emp_gender: {
        type: Sequelize.STRING
      },
      emp_email: {
        type: Sequelize.STRING
      },
      emp_avatar: {
        type: Sequelize.STRING
      },
      emp_role: {
        type: Sequelize.STRING
      },
      teamid: {
        type: Sequelize.INTEGER
      },
      emp_status: {
        type: Sequelize.STRING
      },
      emp_dob: {
        type: Sequelize.DATE
      },
      emp_pass: {
        type: Sequelize.STRING
      },
      emp_street: {
        type: Sequelize.STRING
      },
      emp_phone: {
        type: Sequelize.INTEGER
      },
      emp_city: {
        type: Sequelize.STRING
      },
      emp_postal: {
        type: Sequelize.INTEGER
      },
      emp_country: {
        type: Sequelize.STRING
      },
      emp_uid: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('User_Infos');
  }
};
'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('Team_Infos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      team_name: {
        type: Sequelize.STRING
      },
      team_dis: {
        type: Sequelize.STRING
      },
      team_status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Team_Infos');
  }
};
'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('emp_att_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      emp_uid: {
        type: Sequelize.STRING
      },
      date_att: {
        type: Sequelize.DATE
      },
      duration: {
        type: Sequelize.FLOAT
      },
      note: {
        type: Sequelize.STRING
      },
      start_time: {
        type: Sequelize.DATE
      },
      end_time: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('emp_att_details');
  }
};
'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      members: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
      },
      date_att: {
        type: Sequelize.ARRAY(Sequelize.DATE)
      },
      title: {
        type: Sequelize.STRING
      },
      start_time: {
        type: Sequelize.DATE
      },
      end_time: {
        type: Sequelize.DATE
      },
      notification: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('events');
  }
};
'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('Leaves', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      emp_uid: {
        type: Sequelize.STRING
      },
      emp_name: {
        type: Sequelize.STRING
      },
      requested_date: {
        type: Sequelize.DATE
      },
      start_date: {
        type: Sequelize.DATE
      },
      duration: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Leaves');
  }
};
'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('LeaveSettings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      casual_leaves: {
        type: Sequelize.INTEGER
      },
      medical_leaves: {
        type: Sequelize.INTEGER
      },
      restricted_leave: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('LeaveSettings');
  }
};
'use strict';

module.exports = function (sequelize, DataTypes) {
  var emp_att_detail = sequelize.define('emp_att_detail', {
    emp_uid: DataTypes.STRING,
    date_att: DataTypes.DATE,
    duration: DataTypes.FLOAT,
    note: DataTypes.STRING,
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE
  }, {});

  emp_att_detail.associate = function (models) {
    // associations can be defined here
    emp_att_detail.belongsTo(models.User_Info, {
      foreignKey: 'emp_uid'
    });
  };

  return emp_att_detail;
};

'use strict';

module.exports = function (sequelize, DataTypes) {
  var events = sequelize.define('events', {
    members: DataTypes.ARRAY(DataTypes.INTEGER),
    date_att: DataTypes.ARRAY(DataTypes.DATE),
    title: DataTypes.STRING,
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE,
    notification: DataTypes.INTEGER
  }, {});

  events.associate = function (models) {// associations can be defined here
  };

  return events;
};

'use strict';

var fs = require('fs');

var path = require('path');

var Sequelize = require('sequelize');

var basename = path.basename(__filename);
var env = process.env.NODE_ENV || 'development';

var config = require(__dirname + '/../config/config.js')[env];

var db = {};
var sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs.readdirSync(__dirname).filter(function (file) {
  return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
}).forEach(function (file) {
  var model = sequelize['import'](path.join(__dirname, file));
  db[model.name] = model;
});
Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
'use strict';

module.exports = function (sequelize, DataTypes) {
  var Leaves = sequelize.define('Leaves', {
    emp_uid: DataTypes.STRING,
    emp_name: DataTypes.STRING,
    requested_date: DataTypes.DATE,
    start_date: DataTypes.DATE,
    duration: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {});

  Leaves.associate = function (models) {
    // associations can be defined here
    Leaves.belongsTo(models.User_Info, {
      foreignKey: 'emp_uid'
    });
  };

  return Leaves;
};

'use strict';

module.exports = function (sequelize, DataTypes) {
  var LeaveSetting = sequelize.define('LeaveSetting', {
    casual_leaves: DataTypes.INTEGER,
    medical_leaves: DataTypes.INTEGER,
    restricted_leave: DataTypes.INTEGER
  }, {});

  LeaveSetting.associate = function (models) {// associations can be defined here
  };

  return LeaveSetting;
};

'use strict';

module.exports = function (sequelize, DataTypes) {
  var Team_Info = sequelize.define('Team_Info', {
    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true
    // },
    team_name: DataTypes.STRING,
    team_dis: DataTypes.STRING,
    team_status: DataTypes.STRING
  }, {});

  Team_Info.associate = function (models) {
    // associations can be defined here
    Team_Info.hasMany(models.User_Info, {
      foreignKey: 'teamid'
    });
  };

  return Team_Info;
};

'use strict';

module.exports = function (sequelize, DataTypes) {
  var User_Info = sequelize.define('User_Info', {
    emp_lname: DataTypes.STRING,
    emp_fname: DataTypes.STRING,
    emp_gender: DataTypes.STRING,
    emp_email: DataTypes.STRING,
    emp_avatar: DataTypes.STRING,
    emp_role: DataTypes.STRING,
    teamid: DataTypes.INTEGER,
    emp_status: DataTypes.STRING,
    emp_dob: DataTypes.DATE,
    emp_pass: DataTypes.STRING,
    emp_street: DataTypes.STRING,
    emp_phone: DataTypes.INTEGER,
    emp_city: DataTypes.STRING,
    emp_postal: DataTypes.INTEGER,
    emp_country: DataTypes.STRING,
    emp_uid: DataTypes.STRING
  }, {});

  User_Info.associate = function (models) {
    // associations can be defined here
    User_Info.belongsTo(models.Team_Info, {
      as: 'member',
      foreignKey: 'teamid',
      onDelete: 'CASCADE'
    });
    User_Info.hasMany(models.emp_att_detail, {
      foreignKey: 'emp_uid'
    });
    User_Info.hasMany(models.Leaves, {
      foreignKey: 'emp_uid'
    });
  };

  return User_Info;
};

"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _UserController = _interopRequireDefault(require("../controllers/UserController"));

var express = require('express');

var router = express.Router();

var team_infoController = require('../controllers').team_info; // const UserController = require('../controllers/UserController');


var emp_att_detailController = require('../controllers').emp_att_detail;

var eventsController = require('../controllers').events;
/* GET home page. */


router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
}); // router.get('/api/teamlist', team_infoController.list);
// router.get('/api/teamlist/:id', team_infoController.getById);
// router.post('/api/teamlist', team_infoController.add);
// router.put('/api/teamlist/:id', team_infoController.update);
// router.delete('/api/teamlist/:id', team_infoController.delete);

router.post('/api/team/add_with_users', team_infoController.addWithUsers); // router.get('/api/users',UserController.getAllUser);
// router.get('/api/users/:id', UserController.getAUser);
// router.post('/api/users', user_infoController.addUser);
// router.post('/api/users/:id', user_infoController.updatedUser);
// router.delete('/api/users/:id', user_infoController.deleteUser);

router.get('/api/emp_att_detail/:id', emp_att_detailController.getById);
router.post('/api/emp_att_detail', emp_att_detailController.add);
router.get('/api/events', eventsController.getById);
router.post('/api/events', eventsController.add);
var _default = router;
exports["default"] = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _LeaveController = _interopRequireDefault(require("../controllers/LeaveController"));

var router = (0, _express.Router)();
router.get('/', _LeaveController["default"].getAllLeaves);
router.post('/', _LeaveController["default"].addLeave);
router.get('/setting/', _LeaveController["default"].getLeaveSetting);
router.post('/setting/', _LeaveController["default"].addLeaveSetting);
router.get('/:id', _LeaveController["default"].getALeave);
router.get('/status/:status', _LeaveController["default"].getALeaveStatus);
router.put('/:id', _LeaveController["default"].updatedLeave); // router.delete('/:id', LeaveController.deleteLeave);

var _default = router;
exports["default"] = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _TeamController = _interopRequireDefault(require("../controllers/TeamController"));

var router = (0, _express.Router)();
router.get('/', _TeamController["default"].getAllTeams);
router.post('/', _TeamController["default"].addTeam);
router.get('/:id', _TeamController["default"].getATeam);
router.get('/manager/:id', _TeamController["default"].getATeamManager);
router.put('/:id', _TeamController["default"].updatedTeam); // router.delete('/:id', TeamController.deleteTeam);

var _default = router;
exports["default"] = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _UserController = _interopRequireDefault(require("../controllers/UserController"));

var router = (0, _express.Router)();
router.get('/', _UserController["default"].getAllUsers);
router.get('/manager/', _UserController["default"].getManagers);
router.post('/', _UserController["default"].addUser);
router.get('/:id', _UserController["default"].getAUser);
router.put('/:id', _UserController["default"].updatedUser); // router.delete('/:id', UserController.deleteUser);

var _default = router;
exports["default"] = _default;
'use strict';

var CronJob = require('cron').CronJob;

var notificationsWorker = require('./workers/notificationsWorker');

var moment = require('moment');

var schedulerFactory = function schedulerFactory() {
  return {
    start: function start() {
      new CronJob("* * * * *", function () {
        console.log('Running Send Notifications Worker for ' + moment().format());
        notificationsWorker.run();
      }, null, true, '');
    }
  };
};

module.exports = schedulerFactory();
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass")); // import database from '../src/models';
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
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass")); // import database from '../src/models';
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
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass")); // import database from '../src/models';


var database = require('../models');

var UserService =
/*#__PURE__*/
function () {
  function UserService() {
    (0, _classCallCheck2["default"])(this, UserService);
  }

  (0, _createClass2["default"])(UserService, null, [{
    key: "getAllUsers",
    value: function () {
      var _getAllUsers = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return database.User_Info.findAll();

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

      function getAllUsers() {
        return _getAllUsers.apply(this, arguments);
      }

      return getAllUsers;
    }()
  }, {
    key: "addUser",
    value: function () {
      var _addUser = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(newUser) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return database.User_Info.create(newUser);

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

      function addUser(_x) {
        return _addUser.apply(this, arguments);
      }

      return addUser;
    }()
  }, {
    key: "updateUser",
    value: function () {
      var _updateUser2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(id, _updateUser) {
        var UserToUpdate;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return database.User_Info.findOne({
                  where: {
                    emp_uid: id
                  }
                });

              case 3:
                UserToUpdate = _context3.sent;

                if (!UserToUpdate) {
                  _context3.next = 8;
                  break;
                }

                _context3.next = 7;
                return database.User_Info.update(_updateUser, {
                  where: {
                    emp_uid: Number(id)
                  }
                });

              case 7:
                return _context3.abrupt("return", _updateUser);

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

      function updateUser(_x2, _x3) {
        return _updateUser2.apply(this, arguments);
      }

      return updateUser;
    }()
  }, {
    key: "getAUser",
    value: function () {
      var _getAUser = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(id) {
        var theUser;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return database.User_Info.findOne({
                  where: {
                    emp_uid: id
                  }
                });

              case 3:
                theUser = _context4.sent;
                return _context4.abrupt("return", theUser);

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

      function getAUser(_x4) {
        return _getAUser.apply(this, arguments);
      }

      return getAUser;
    }()
  }, {
    key: "getManagers",
    value: function () {
      var _getManagers = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5() {
        var theUser;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return database.User_Info.findAll({
                  where: {
                    emp_role: 'manager'
                  }
                });

              case 3:
                theUser = _context5.sent;
                return _context5.abrupt("return", theUser);

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

      function getManagers() {
        return _getManagers.apply(this, arguments);
      }

      return getManagers;
    }()
  }, {
    key: "deleteUser",
    value: function () {
      var _deleteUser = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee6(id) {
        var UserToDelete, deletedUser;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return database.User_Info.findOne({
                  where: {
                    emp_uid: Number(id)
                  }
                });

              case 3:
                UserToDelete = _context6.sent;

                if (!UserToDelete) {
                  _context6.next = 9;
                  break;
                }

                _context6.next = 7;
                return database.User_Info.destroy({
                  where: {
                    emp_uid: id
                  }
                });

              case 7:
                deletedUser = _context6.sent;
                return _context6.abrupt("return", deletedUser);

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

      function deleteUser(_x5) {
        return _deleteUser.apply(this, arguments);
      }

      return deleteUser;
    }()
  }]);
  return UserService;
}();

var _default = UserService;
exports["default"] = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Util =
/*#__PURE__*/
function () {
  function Util() {
    (0, _classCallCheck2["default"])(this, Util);
    this.statusCode = null;
    this.type = null;
    this.data = null;
    this.message = null;
  }

  (0, _createClass2["default"])(Util, [{
    key: "setSuccess",
    value: function setSuccess(statusCode, message, data) {
      this.statusCode = statusCode;
      this.message = message;
      this.data = data;
      this.type = 'success';
    }
  }, {
    key: "setError",
    value: function setError(statusCode, message) {
      this.statusCode = statusCode;
      this.message = message;
      this.type = 'error';
    }
  }, {
    key: "send",
    value: function send(res) {
      var result = {
        status: this.type,
        message: this.message,
        data: this.data
      };

      if (this.type === 'success') {
        return res.status(this.statusCode).json(result);
      }

      return res.status(this.statusCode).json({
        status: this.type,
        message: this.message
      });
    }
  }]);
  return Util;
}();

exports["default"] = Util;
'use strict';

var moment = require('moment');

var eventsController = require('../controllers').events;

var events = require('../models').events;

var list = [];

var checkAppointment = function checkAppointment(date, event) {
  return Math.round(moment.duration(moment(event.start_time).diff(moment(date))).asMinutes()) === event.notification;
};

var condition = [];

var requiresNotification = function requiresNotification() {
  // console.log("Yeah Yeah")
  var searchDate = new Date();
  promise1.then(function (value) {
    list = JSON.parse(JSON.stringify(value)); // console.log(list)
    // expected output: "Success!"
  }); // list.map(event => {
  //     console.log(checkAppointment(searchDate,event))
  // });

  condition = list.filter(function (event) {
    return checkAppointment(searchDate, event);
  });
  console.log(condition); // console.log(events.findAll())
};

var promise1 = new Promise(function (resolve, reject) {
  // resolve('Success!');
  resolve(events.findAll());
}); //   promise1.then(function(value) {
//     console.log(value);
//     // expected output: "Success!"
//   });
// const Appointment = require('../models/appointment');

var notificationWorkerFactory = function notificationWorkerFactory() {
  return {
    run: function run() {
      requiresNotification();
    }
  };
};

module.exports = notificationWorkerFactory();
//# sourceMappingURL=production.js.map