const getMyURLMiddleware = async (request, response, next) => {
  const TOKEN = request.header('Authorization')?.split('Bearer ')[1];
  const decoded = decodeToken(TOKEN);
  if (!decoded) {
    return response.status(401).send('Token Inválido');
  }
  try {
    const query = `
  SELECT u.id, u.name, SUM(l.views) AS "visitCount"
  FROM users u 
  JOIN links l  
  ON u.id = l.user_id 
  AND u.id = $1
  GROUP by u.id`;

    const { rows: user } = await connection.query(query, [myId]);
    if (!user[0]) {
      return response.sendStatus(404);
    }

    response.locals.userData = { myId: decoded.id, user: user[0] };
    next();
  } catch {
    return response.sendStatus(500);
  }
};

export default getMyURLMiddleware;
