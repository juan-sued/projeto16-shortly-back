import connection from '../databases/postgres.js';

const getMyUrlsController = async (request, response) => {
  const { userData } = response.locals;
  try {
    const QUERY = `
    SELECT l.id, l.short_url as "shortUrl" ,l.url ,l.views as "visitCount"
    FROM links l where l.user_id = $1;
    `;
    const { rows: shortenedUrls } = await connection.query(QUERY, [userData.myId]);

    const userInfo = userData.user;
    const userObject = {
      id: userInfo.id,
      name: userInfo.name,
      visitCount: userInfo.visitCount,
      shortenedUrls
    };

    response.status(200).send(userObject);
  } catch {
    return response.sendStatus(500);
  }
};

export default getMyUrlsController;
