// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/q2_project',
    migrations: {
      directory: __dirname + '/public/server/db/migrations'
    },
    seeds: {
      directory: __dirname + '/public/server/db/seeds'
    }
  },

  production: {
    client: 'pg',
    connection: 'postgres://pqoklsdrxgnznq:83c1ccb52beccb22ba079846358691d9dc811d767b2adb82815923439952522e@ec2-184-73-167-43.compute-1.amazonaws.com:5432/dev2ah3rtjn5m6'
  }

};
