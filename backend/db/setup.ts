import { Client } from 'pg';

const sqlclient = new Client({
  user: 'ecosystem_user',
  host: '127.0.0.1',
  database: 'ecosystem_db',
  password: 'my_password',
  port: 5432
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
