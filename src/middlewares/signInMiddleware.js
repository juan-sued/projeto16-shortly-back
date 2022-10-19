import connection from '../databases/postgres.js';
import signInSchema from '../schemas/signInSchema.js';
import bcrypt from 'bcrypt';
import * as signRepository from '../repositories/signRepository.js';
import * as controllerHelper from '../controllers/controllerHelper.js';
import * as validateSchemaHelper from './validateSchemaHelper.js';

async function signInMiddleware(request, response, next) {
  const userData = request.body;

  try {
    const errors = await validateSchemaHelper.validateSchema(
      userData,
      signInSchema,
      response
    );

    if (errors) {
      return controllerHelper.validateSchemaResponse(response, errors);
    }

    const { rows: user } = await signRepository.getUsersByEmail(userData.email);

    if (!user[0] || !bcrypt.compareSync(userData.password, user[0]?.password))
      return response.sendStatus(401);

    response.locals.user = user;
    next();
  } catch {
    return response.status(500).send('erro ao validar user');
  }
}

export default signInMiddleware;
