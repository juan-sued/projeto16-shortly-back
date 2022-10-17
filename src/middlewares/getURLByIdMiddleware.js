import connection from '../databases/postgres.js';

const getURLByIdMiddleware = async (request, response, next) => {
  const { id } = request.params;

  if (isNaN(id)) return response.status(422).send('Digite um valor numérico!');

  try {
    const { rows: url } = await connection.query('SELECT * FROM links WHERE id = $1', [
      id
    ]);

    if (!url[0]) return response.sendStatus(404);

    response.locals.urlObject = url[0];
    next();
  } catch {
    return response.status(500).send('erro ao validar user');
  }
};

export default getURLByIdMiddleware;
