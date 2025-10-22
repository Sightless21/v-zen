import dotenv from "dotenv";

dotenv.config();

const requiredEnvVars = [
  "LIFF_ID",
  "JWT_SECRET",
  "PORT",
];

for (const key of requiredEnvVars) {
  if (!process.env[key]) {
    console.warn(`⚠️  Missing environment variable: ${key}`);
  }
}
export const config = {
  env: process.env.NODE_ENV || "development",
  isProd: process.env.NODE_ENV === "production",

  SERVER: {
    PORT: Number(process.env.PORT) || 3000,
  },

  LINE: {
    LIFFID: process.env.LIFF_ID || "dev_liff_id",
  },

  JWT: {
    SECRET: process.env.JWT_SECRET || "dev_secret",
  },

  DATABASE: {
    URL: process.env.DATABASE_URL || "postgresql://postgres:password@localhost:5432/mydb",
  },
};
