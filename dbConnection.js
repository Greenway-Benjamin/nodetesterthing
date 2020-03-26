const pg = require('pg');
//const connectionString = 'postgres://lhedqyiaipvdah:c31b22f594e65a47f7498e694612ea9965ed9c9a8da17464368660de119634fa@ec2-184-72-235-80.compute-1.amazonaws.com:5432/d5tf628c1e73sa';
/*
const pool = new pg.Pool({
    user: 'lpueihewrxpcdx',
    host: 'ec2-23-22-156-110.compute-1.amazonaws.com',
    database: 'd160velp017v9a',
    password: 'a50f188f8f063b850de4ed1ea3cc0fbb31b94855017e0a29ebee4164b5db6fc0',
    port: 5432
});
*/
connectionString = {
  connectionString: process.env.DATABASE_URL,
};

const pool = new pg.Pool(connectionString);

module.exports = pool;
