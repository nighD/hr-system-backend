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
//# sourceMappingURL=leaves.js.map