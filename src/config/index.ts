import dotenv from "dotenv";

dotenv.config();

export default {
  PORT: process.env.SERVER_PORT || 5000,

  DB_URL: process.env.DB_URL,
};
