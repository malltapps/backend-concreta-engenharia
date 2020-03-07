import Sequelize, { Model } from "sequelize";

class Section extends Model {
  static init(sequelize) {
    super.init(
      {
        content: Sequelize.STRING,
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

export default Section;
