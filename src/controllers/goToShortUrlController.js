import connection from '../databases/postgres';

const goToShortUrlController = async (req, res) => {
  const { url } = response.locals;
  const { shortUrl } = req.params;

  try {
    const views = url[0].views + 1;
    await connection.query('UPDATE links SET views = $1 WHERE short_url', [
      views,
      shortUrl
    ]);
    res.redirect(url[0].url);
  } catch {
    return response.status(500).send('Erro ao pegar url');
  }
};

export default goToShortUrlController;
