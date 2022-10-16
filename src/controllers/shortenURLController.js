import connection from '../database/postgres.js';

const shortenURLController = async (req, res) => {
  const { shortenData } = res.locals;
  try {
    await connection.query('INSERT INTO links(user_id,url,short_url) values($1,$2,$3)', [
      shortenData.userId,
      shortenData.url,
      shortenData.shortURL
    ]);
    res.status(201).json({ shortURL: shortenData.shortURL });
  } catch (err) {
    res.status(500).send('Houve um erro interno ao criar a URL');
  }
};
export default shortenURLController;
