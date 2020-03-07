import Sequelize, { Model } from "sequelize";

class Gallery extends Model {
  static init(sequelize) {
    super.init(
      {
        originalName: Sequelize.STRING,
        generatedName: Sequelize.STRING,
        dir: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Gallery;
