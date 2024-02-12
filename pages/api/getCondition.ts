// Here we retrieve the current distribution of opinion instances from the database with which the chat system is to argue.
// To do this, we retrieve the number of values: pro, con, neutral from the variable "condition" from the participant table 
// Through the usage of typescript you need also to install: npm install --save @types/pg

import { NextApiRequest, NextApiResponse } from 'next';
import { Pool, QueryResult } from 'pg';

const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DATABASE,
    password: process.env.POSTGRES_PASSWORD,
    port: 5432,
    connectionString: process.env.POSTGRES_URL,
    ssl: { rejectUnauthorized: false },
  });

  const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const result: QueryResult = await pool.query('SELECT condition FROM Participants');
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error executing query', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export default handler;