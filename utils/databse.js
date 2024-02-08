import pg from 'pg';

// ADD Function to get number of survey participants


const { Pool } = pg;


const pool = new Pool({

  connectionString: process.env.POSTGRES_URL + "?sslmode=require",

})