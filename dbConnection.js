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

var connector = 'postgres://ifqhbkvidfemnj:b01af7ad1a34b0d69fdf4d6617ef71873dd02d0a5aad44c53e88f5416b59e225@ec2-34-193-232-231.compute-1.amazonaws.com:5432/dbbsvor9teh4sh';

connectionString = {
  connectionString: /*process.env.DATABASE_URL*/ connector,
  ssl: true
};

const pool = new pg.Pool(connectionString);

module.exports = pool;
