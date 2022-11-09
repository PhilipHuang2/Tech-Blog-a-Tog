const Sequelize = require('sequelize');
let sequelize;
require('dotenv').config();
if(process.env.JAWSDB_URL)
{
  const seqaulize2 = new Sequelize( process.env.JAWSDB_URL) 
    module.exports = seqaulize2;
   sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host:'localhost',
      dialect: 'mysql',
      port: 3306,
    }
  );
}



module.exports = sequelize;