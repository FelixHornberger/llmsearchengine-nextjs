// TODO: Logic for submitting User
/* Neds to hand over:
    Code used for table creation:
    CREATE TABLE Participants (
    participant_id INT PRIMARY KEY NOT NULL,
    age INT NOT NULL,
    gender VARCHAR(255) NOT NULL,
    levelOfEducation TEXT NOT NULL,
    occupation TEXT NOT NULL,
    argumentsBefore TEXT NOT NULL,
    argumentsAfter TEXT NOT NULL,
    taskTopic VARCHAR(255) NOT NULL,
    topicGrading TEXT NOT NULL,
    timestamps TEXT NOT NULL,
    condition VARCHAR(255) NOT NULL,
    mildness BOOLEAN NOT NULL,
    dateOfSubmission DATE NOT NULL);
*/

import { NextApiRequest, NextApiResponse } from 'next';
import { Pool } from 'pg';


// This should probably be its own file later
const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DATABASE,
    password: process.env.POSTGRES_PASSWORD,
    port: 5432,
    connectionString: process.env.POSTGRES_URL,
    ssl: { rejectUnauthorized: false },
});


// We could have an big issue with an bad Actor try to enforce an SQL-Injection this could fuck us pretty hard, we should think over an solution for this before setting live.
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { participant_id, age, gender, levelOfEducation, occupation, argumentsBefore, argumentsAfter, taskTopic, topicGrading, timestamps, condition, mildness, dateOfSubmission}: 
        {
            participant_id: string,
            age: number,
            gender: string,
            levelOfEducation: string,
            occupation: string,
            argumentsBefore: string,
            argumentsAfter: string,
            taskTopic: string,
            topicGrading: string,
            timestamps: string, 
            condition: string, 
            mildness: boolean, 
            dateOfSubmission: string | Date // I am not sure what type suits better
        } = req.body;
        try {
            const client = await pool.connect();

            await client.query(`INSERT INTO Participants (participant_id, age, gender, levelOfEducation, occupation, argumentsBefore, argumentsAfter, taskTopic, topicGrading, timestamps, condition, mildness, dateOfSubmission)
                                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`,
                                [participant_id, age, gender, levelOfEducation, occupation, argumentsBefore, argumentsAfter, taskTopic, topicGrading, timestamps, condition, mildness, dateOfSubmission])
            
            client.release();
            res.status(201).json({message: 'Participant inserted succesfully '});
        } catch (error) {
            console.error('Error executing query:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
    
};

export default handler;