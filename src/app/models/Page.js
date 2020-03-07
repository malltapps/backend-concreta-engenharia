import Sequelize, { Model } from "sequelize";
//import slugify from "slugify";

class Page extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        link: Sequelize.STRING,
        slug: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Section, {
      foreignKey: "page_id",
      as: "sections",
    });
  }
}

export default Page;
