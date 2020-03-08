"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _Page = require('../app/models/Page'); var _Page2 = _interopRequireDefault(_Page);
var _Section = require('../app/models/Section'); var _Section2 = _interopRequireDefault(_Section);
var _Gallery = require('../app/models/Gallery'); var _Gallery2 = _interopRequireDefault(_Gallery);
var _User = require('../app/models/User'); var _User2 = _interopRequireDefault(_User);
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);

const connection = new (0, _sequelize2.default)(_database2.default);

_Page2.default.init(connection);
_Section2.default.init(connection);
_User2.default.init(connection);
_Gallery2.default.init(connection);

_Page2.default.associate(connection.models);
_Section2.default.associate(connection.models);

exports. default = connection;
