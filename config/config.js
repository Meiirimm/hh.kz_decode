const fs = require('fs')
const path = require('path')


module.exports = {
    development: {
      username: 'admin',
      password: 'root',
      database: 'admin',
      host: 'localhost',
      dialect: 'postgres'
    },
    production: {
      username: 'doadmin',
      password: 'AVNS_WqNzDFsGW_6FJIb3NBf',
      database: 'defaultdb',
      host: 'db-postgresql-sgp1-19609-do-user-14535698-0.b.db.ondigitalocean.com',
      dialect: 'postgres',
      port: 25060,
      dialectOptions: {
        ssl: {
            ca: fs.readFileSync(path.resolve("config", "ca-certificate.crt"))  // Замените на путь к вашему сертификату
        }
    }

    }
};
  