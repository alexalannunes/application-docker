module.exports = {
  production: {
    client: "postgresql",
    connection: {
      host: "172.27.0.2",
      database: "postgres",
      user: "postgres",
      password: "myP4ssW0rd_docker_pratice", //change on docker
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
}["production"];
