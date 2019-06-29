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
//# sourceMappingURL=teams.js.map