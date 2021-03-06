import database from '@config/database';

const databaseConfig = database();

module.exports = {
  type: databaseConfig.DIALECT,
  host: databaseConfig.HOST,
  port: databaseConfig.PORT,
  username: databaseConfig.USER,
  password: databaseConfig.PASSWORD,
  database: databaseConfig.BASE,
  synchronize: false,
  entities: [
    './src/modules/**/infra/typeorm/entities/**/*.{ts,js}',
    './src/shared/infra/typeorm/entities/**/*.{ts,js}',
  ],
  migrations: [`./src/shared/infra/typeorm/migrations/**/*.{ts,js}`],
  cli: {
    entitiesDir: [
      `./src/modules/**/infra/typeorm/entities/**/*.{ts,js}`,
      `./src/shared/infra/typeorm/entities/**/*.{ts,js}`,
    ],
    migrationsDir: `./src/shared/infra/typeorm/migrations`,
  },
  autoLoadEntities: true,
};
