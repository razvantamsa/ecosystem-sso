import { Client } from 'pg';

const sqlclient = new Client({
  user: process.env.DB_USER_SQL,
  host: process.env.DB_HOST_SQL,
  database: process.env.DB_NAME_SQL,
  password: process.env.DB_PASSWORD_SQL,
  port: Number(process.env.DB_PORT_SQL)
});

async function connectToDB() {
  try {
    await sqlclient.connect();
    console.log('Connected to PostgreSQL');
    global.sqlclient = sqlclient;
  } catch (error) {
    throw new Error(`Error connecting to PostgreSQL: ${error}`);
  }
}

(async () => {
  try {
    if (
      !process.env.DB_USER_SQL ||
      !process.env.DB_HOST_SQL ||
      !process.env.DB_NAME_SQL ||
      !process.env.DB_PASSWORD_SQL ||
      !process.env.DB_PORT_SQL
    ) {
      throw new Error('PostgreSQL connection configuration missing attributes');
    }

    await connectToDB();
  } catch (error) {
    console.error(error);
    global.sqlclient = undefined;
  }
})();
