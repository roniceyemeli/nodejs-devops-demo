import { Sequelize } from "sequelize";

const Customersequelize = new Sequelize(
  "user_db",
  "user_admin",
  "user_password123",
  {
    host: "localhost",
    dialect: "postgres",
    port: 5434,
  }
);

export default Customersequelize;
