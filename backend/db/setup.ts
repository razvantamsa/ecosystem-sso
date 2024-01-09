import { PrismaClient } from '@prisma/client';

async function checkDatabaseConnection() {
  const sqlclient = new PrismaClient();

  try {
    await sqlclient.$connect();
    global.sqlclient = sqlclient;
    console.log('Connected to the database.');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

(async () => {
  try {
    await checkDatabaseConnection();
    global.sqlconnected = true;
  } catch (error) {
    console.error(error);
    global.sqlconnected = false;
  }
})();
