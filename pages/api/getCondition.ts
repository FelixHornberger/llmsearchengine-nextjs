// Here we retrieve the current distribution of opinion instances from the database with which the chat system is to argue.
// To do this, we retrieve the number of values: pro, con, neutral from the variable "condition" from the participant table 
// Through the usage of typescript you need also to install: npm install --save @types/pg

import { NextApiRequest, NextApiResponse } from 'next';
import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
  connectionString: process.env.POSTGRES_URL,
  ssl: { rejectUnauthorized: false },
});

function returnCondition(arr: Array<number>) {
  const [first, middle, last] = arr;

  if (first === middle && middle === last) {
    const randomIndex = Math.floor(Math.random() * 3);
    return ["pro", "con", "neutral"][randomIndex];
  } else if (first === middle && last > first) {
    const randomIndex = Math.floor(Math.random() * 2);
    return ["pro", "neutral"][randomIndex];
  } else if (middle === last && first > middle) {
    const randomIndex = Math.floor(Math.random() * 2);
    return ["neutral", "con"][randomIndex];
  } else if (first === last && middle > first) {
    const randomIndex = Math.floor(Math.random() * 2);
    return ["pro", "con"][randomIndex];
  } else if (first <= middle && first <= last) {
    return "pro";
  } else if (middle <= first && middle <= last) {
    return "neutral";
  } else {
    return "con";
  }
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT ARRAY[ \
                                        COUNT(CASE WHEN condition = \'pro\' THEN 1 END), \
                                        COUNT(CASE WHEN condition = \'neutral\' THEN 1 END), \
                                        COUNT(CASE WHEN condition = \'con\' THEN 1 END) \
                                        ] AS condition_counts \
                                    FROM Participants;');
    const conditions = result.rows;

    client.release();
    let condition = returnCondition(result.rows)

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({ condition });
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default handler;