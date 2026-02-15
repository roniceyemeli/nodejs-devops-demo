import { Sequelize } from "sequelize";

const Usersequelize = new Sequelize(
  "user_db",
  "user_admin",
  "user_password123",
  {
    host: "localhost",
    dialect: "postgres",
    port: 5433,
  }
);

export default Usersequelize;
