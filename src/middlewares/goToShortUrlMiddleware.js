import connection from '../databases/postgres.js';

const goToShortUrlMiddleware = async (request, response, next) => {
  const { shortUrl } = request.params;
  try {
    const QUERY = `
    SELECT l.views, l.url
    FROM links l 
    JOIN users u 
    ON l.user_id = u.id 
    AND l.short_url = $1`;

    const { rows: url } = await connection.query(QUERY, [shortUrl]);
    if (!url[0]) return response.sendStatus(404);
    response.locals.url = url;
    next();
  } catch {
    return response.status(500).send('Erro ao pegar url');
  }
};

export default goToShortUrlMiddleware;
