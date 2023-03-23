const Sequelize = require("sequelize");
require("dotenv").config();

let sequelize;

if(process.env.JAWSDB_URL)
{
    sequelize = new Sequelize(process.env.JAWSDB_URL);
}
else
{
    sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASS,{
        host:'dpg-cgeajug2qv21ab4d87u0-a',
        dialect:'mysql',
        port:5432,
        password:'Password'
    });
}
module.exports = sequelize;

