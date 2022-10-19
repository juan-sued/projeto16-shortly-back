import { decodedToken } from '../services/jwtToken.js';
import connection from '../databases/postgres.js';

const getMyURLMiddleware = async (request, response, next) => {
  const TOKEN = request.header('Authorization')?.split('Bearer ')[1];

  const decoded = decodedToken(TOKEN);

  if (!decoded) {
    return response.status(401).send('Token Inválido');
  }
  try {
    const query = `SELECT u.id, u.name, SUM(l.views) AS "visitCount"
  FROM users u 
  JOIN links l  
  ON u.id = l.user_id 
  AND u.id = $1
  GROUP by u.id;`;

    const { rows: user } = await connection.query(query, [decoded.id]);

    if (!user[0]) {
      return response.sendStatus(404);
    }

    response.locals.userData = { myId: decoded.id, user: user[0] };
    next();
  } catch {
    return response.status(500).send('erro no middleware getMyURLs');
  }
};

export default getMyURLMiddleware;
