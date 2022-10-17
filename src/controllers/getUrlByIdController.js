import connection from '../databases/postgres.js';

const getUrlById = async (request, response) => {
  const { id } = request.params;

  if (isNaN(id)) return response.status(422).send('Digite um valor numérico!');

  try {
    const { rows: url } = await connection.query('SELECT * FROM links WHERE id = $1', [
      id
    ]);

    if (!url[0]) return response.sendStatus(404);

    const dataURL = {
      id: url[0],
      shortURL: url[0].short_url,
      url: url[0].url
    };

    response.send(dataURL);
  } catch {
    response.status(500).send('Houve um erro interno ao pegar URL');
  }
};

export default getUrlById;
