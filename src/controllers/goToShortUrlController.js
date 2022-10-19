import connection from '../databases/postgres.js';

const goToShortUrlController = async (request, response) => {
  const { url } = response.locals;
  const { shortUrl } = request.params;

  try {
    const views = url[0].views + 1;

    await connection.query('UPDATE links SET views = $1 WHERE short_url = $2', [
      views,
      shortUrl
    ]);
    console.log(url[0].url);
    response.redirect(url[0].url);
  } catch {
    return response.status(500).send('Erro ao pegar url');
  }
};

export default goToShortUrlController;
