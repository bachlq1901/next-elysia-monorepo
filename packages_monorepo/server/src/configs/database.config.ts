import * as process from 'node:process';
import { DataSource } from 'typeorm';

export const SQLDatabase = new DataSource({
  type: (process.env.DATABASE_CONNECTION as 'mysql') || 'mysql',
  host: process.env.SQL_HOST,
  port: Number(process.env.SQL_PORT),
  username: process.env.SQL_USERNAME,
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_DATABASE,
  synchronize: process.env.DATABASE_SYNC == 'true',
  logging: process.env.DATABASE_LOG == 'true',
  entities: [],
});
