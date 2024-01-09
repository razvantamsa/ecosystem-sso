import { Client } from 'pg';

const sqlclient = new Client({
  user: process.env.DB_USER_SQL,
  host: process.env.DB_HOST_SQL,
  database: process.env.DB_NAME_SQL,
  password: process.env.DB_PASSWORD_SQL,
  port: Number(process.env.DB_PORT_SQL)
});

sqlclient
  .connect()
  .then(() => {
    console.log('Connected to PostgreSQL');
    global.sqlclient = sqlclient;
  })
  .catch((error: any) =>
    console.error('Error connecting to PostgreSQL', error)
  );
