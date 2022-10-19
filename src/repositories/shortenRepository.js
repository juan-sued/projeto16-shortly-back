import connection from '../databases/postgres.js';

async function insertShortenUrl({ url, userId, shortUrl }) {
  return connection.query('INSERT INTO links(user_id,url,short_url) values($1,$2,$3)', [
    userId,
    url.url,
    shortUrl
  ]);
}

export { insertShortenUrl };
