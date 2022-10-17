import connection from '../databases/postgres.js';

const getRanksController = async (req, response) => {
  const query = `
  SELECT u.id, u.name, COUNT(l.views) AS "linksCount", COALESCE(SUM(l.views),0) AS "visitCount"
  FROM users u 
  LEFT JOIN 
  links l 
  ON u.id = l.user_id
  GROUP BY u.id 
  ORDER BY "visitCount" DESC 
  LIMIT(10)`;

  try {
    const { rows: rank } = await connection.query(query);
    response.send(rank);
  } catch {
    response.sendStatus(500);
  }
};
export default getRanksController;
