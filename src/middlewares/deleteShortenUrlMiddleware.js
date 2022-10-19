import { decodedToken } from '../services/jwtToken.js';
import connection from '../databases/postgres.js';
const deleteShortenUrlMiddleware = async (request, response, next) => {
  const { id } = request.params;
  if (isNaN(id)) {
    return response.status(422).send('Digite um valor númerico!');
  }
  const TOKEN = request.header('Authorization')?.split('Bearer ')[1];
  const decoded = decodedToken(TOKEN);
  if (!decoded) {
    return response.status(401).send('Token Inválido');
  }

  try {
    const { rows: url } = await connection.query('SELECT * FROM links where id= $1', [
      id
    ]);

    if (!url[0]) return response.sendStatus(404);

    if (url[0].user_id !== decoded.id) return response.sendStatus(401);

    response.locals.deleteShortenData = { userId: decoded.id, urlId: id };
    next();
  } catch {
    response.sendStatus(500);
  }
};
export default deleteShortenUrlMiddleware;
