// Update with your config settings.
/**
 * Entidade:
 * ong
 * incidents
 * 
 * Funcionalidades:
 * Login ong
 * Logout ong
 * cadastro ong
 * cadastro incident
 * deletar incident
 * listar incident expecifico da ong logada
 * listar todos os casos
 * entrar em contato via wpp e email
 */
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
    migrations:{
      directory:'./src/database/migrations'
    },
    useNullAsDefault:true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
