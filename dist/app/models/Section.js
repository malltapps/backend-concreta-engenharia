"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Section extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        content: _sequelize2.default.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Page, {
      foreignKey: "page_id",
    });
  }
}

exports. default = Section;
