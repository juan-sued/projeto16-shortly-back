import connection from '../databases/postgres.js';

async function getUsersByEmail(email) {
  return connection.query(`SELECT * FROM users WHERE email = $1;`, [email]);
}
export { getUsersByEmail };
