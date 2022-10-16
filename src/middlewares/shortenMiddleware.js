import { nanoid } from 'nanoid';
import shortenURLSchema from '../schemas/shortenURLSchema';
import decodedToken from '../services/jwtToken.js';
const shortenMiddleware = async (request, response, next) => {
  const { url } = request.body;

  const TOKEN = request.header('Authorization')?.split('Baerer ')[1];

  const validate = shortenURLSchema.validate(userData, { abortEarly: false });
  const { error } = validate;

  if (error) {
    const errors = error.details.map(err => err.message);
    return response.status(422).send(errors);
  }

  try {
    const decoded = decodedToken(TOKEN);

    if (!decoded) return response.status(401).send('Token Inválido');

    response.locals.shortenData = { userId: decoded.id, url, shortURL: nanoid(10) };
    next();
  } catch {
    return response.status(500).send('erro ao validar user');
  }
};
