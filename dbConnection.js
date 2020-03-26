const pg = require('pg');
//const connectionString = 'postgres://lhedqyiaipvdah:c31b22f594e65a47f7498e694612ea9965ed9c9a8da17464368660de119634fa@ec2-184-72-235-80.compute-1.amazonaws.com:5432/d5tf628c1e73sa';

const pool = new pg.Client({
    user: 'lhedqyiaipvdah',
    host: 'ec2-184-72-235-80.compute-1.amazonaws.com',
    database: 'd5tf628c1e73sa',
    password: 'c31b22f594e65a47f7498e694612ea9965ed9c9a8da17464368660de119634fa',
    port: 5432
});

module.exports = pool;
