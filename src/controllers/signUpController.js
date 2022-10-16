import bcrypt from 'bcrypt';
import connection from '../databases/postgres.js';

const signUpController = async (request, response) => {
  const { name, email, password } = request.body;

  const encryptedPassword = bcrypt.hashSync(password, 10);

  try {
    await connection.query(
      `INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`,
      [name, email, encryptedPassword]
    );

    return response.sendStatus(201);
  } catch {
    return response.status(500).send('erro ao inserir Users');
  }
};

export default signUpController;
