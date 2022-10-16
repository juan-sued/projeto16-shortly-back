import connection from '../databases/postgres.js';
import userSchema from '../schemas/signUpSchema.js';

async function signUpMiddleware(request, response, next) {
  const newUser = request.body;

  const validate = userSchema.validate(newUser, { abortEarly: false });
  const { error } = validate;

  if (error) {
    const errors = error.details.map(err => err.message);
    return response.status(422).send(errors);
  }

  try {
    const { rows: isUserRegistered } = await connection.query(
      `SELECT * FROM users WHERE email = $1;`,
      [newUser.email]
    );

    if (isUserRegistered[0]) return response.sendStatus(409);

    next();
  } catch {
    return response.status(500).send('erro ao validar user');
  }
}

export default signUpMiddleware;
