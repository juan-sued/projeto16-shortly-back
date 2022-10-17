import connection from '../databases/postgres.js';

const shortenURLController = async (request, response) => {
  const { shortenData } = response.locals;
  try {
    await connection.query('INSERT INTO links(user_id,url,short_url) values($1,$2,$3)', [
      shortenData.userId,
      shortenData.url,
      shortenData.shortURL
    ]);
    response.status(201).json({ shortURL: shortenData.shortURL });
  } catch {
    response.status(500).send('Houve um erro interno ao criar a URL');
  }
};
export default shortenURLController;
