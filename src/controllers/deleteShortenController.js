import connection from '../databases/postgres.js';

const deleteShortenController = async (request, response) => {
  const { deleteShortenData } = response.locals;
  console.log(Number(deleteShortenData.urlId));
  try {
    await connection.query('DELETE FROM links WHERE id = $1;', [
      Number(deleteShortenData.urlId)
    ]);

    response.sendStatus(204);
  } catch {
    response.status(500).send('Houve um erro interno ao deletar URL');
  }
};

export default deleteShortenController;
