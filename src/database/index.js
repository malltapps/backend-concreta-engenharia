import Sequelize from "sequelize";
import Page from "../app/models/Page";
import Section from "../app/models/Section";
import Gallery from "../app/models/Gallery";
import User from "../app/models/User";
import databaseConfig from "../config/database";

const connection = new Sequelize(databaseConfig);

Page.init(connection);
Section.init(connection);
User.init(connection);
Gallery.init(connection);

Page.associate(connection.models);
Section.associate(connection.models);

export default connection;
