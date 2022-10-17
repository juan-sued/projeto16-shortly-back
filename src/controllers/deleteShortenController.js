const deleteShortenController = async (request, response) => {
  const { deleteShortenData } = response.locals;
  try {
    await connection.query('DELETE FROM links where id= $1', [deleteShortenData.urlId]);
    response.sendStatus(204);
  } catch {
    response.status(500).send('Houve um erro interno ao pegar URL');
  }
};

export default deleteShortenController;
