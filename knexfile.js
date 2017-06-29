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
    connection: 'postgres://rketwcgabobqtt:f2b1e991138609d6a45f8d02a937226a620526913c1dc7fd410d6a4e9b3e15cb@ec2-184-73-249-56.compute-1.amazonaws.com:5432/d78amgf03bor69',
    migrations: {
      directory: __dirname + '/public/server/db/migrations'
    },
    seeds: {
      directory: __dirname + '/public/server/db/seeds'
    }
  }

};
