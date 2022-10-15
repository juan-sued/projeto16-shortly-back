import connection from '../databases/postgres.js';
import userSchema from '../schemas/userSchema.js';

async function ValidateNewUser(request, response, next) {
  const newUser = request.body;

  const validate = userSchema.validate(newUser, { abortEarly: false });
  const { error } = validate;

  if (error) {
    const errors = error.details.map(err => err.message);
    return response.status(422).send(errors);
  }

  try {
    const { rows: responseTableUsers } = await connection.query(
      `SELECT * FROM users WHERE email = $1;`,
      [newUser.email]
    );

    const isUserRegistered = responseTableUsers.length > 0 ? true : false;

    if (isUserRegistered) return response.sendStatus(409);

    next();
  } catch {
    return response.status(500).send('erro ao validar user');
  }
}

export default ValidateNewUser;
