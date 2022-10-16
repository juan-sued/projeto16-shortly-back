import connection from '../databases/postgres.js';
import signInSchema from '../schemas/signInSchema.js';
import bcrypt from 'bcrypt';

async function signInMiddleware(request, response, next) {
  const userData = request.body;

  const validate = signInSchema.validate(userData, { abortEarly: false });
  const { error } = validate;

  if (error) {
    const errors = error.details.map(err => err.message);
    return response.status(422).send(errors);
  }

  try {
    const { rows: user } = await connection.query(
      `SELECT * FROM users WHERE email = $1;`,
      [userData.email]
    );

    if (!user[0] || !bcrypt.compareSync(userData.password, user[0]?.password))
      return response.sendStatus(401);
    response.locals.user = user;
    next();
  } catch {
    return response.status(500).send('erro ao validar user');
  }
}

export default signInMiddleware;
