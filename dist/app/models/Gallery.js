"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Gallery extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        originalName: _sequelize2.default.STRING,
        generatedName: _sequelize2.default.STRING,
        dir: _sequelize2.default.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

exports. default = Gallery;
