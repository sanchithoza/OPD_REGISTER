// Update with your config settings.

module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      port: "3306",
      user: "root",
      password: "",
      database: "requests_opd_register",
      //for sanchithoza.xyz web version
      //user:'aicsacin_root',
      // password:'Sanchit@2021#',
      //database: 'aicsacin_opd_register'
    },
  },
  /*production: {
      client: 'mysql',
      connection: {
          host: 'localhost',
          user: 'id17259105_root',
          password: 'Sanchit@2021',
          database: 'id17259105_price_finder_db'
      }
  }*/
};
