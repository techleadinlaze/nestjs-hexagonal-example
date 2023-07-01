import { TicketsEntity } from 'src/ticket/infrastructure/presistence/typeorm/ticket.entity';
import { DataSource, DataSourceOptions } from 'typeorm';

const options: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'postgres',
  password: 'Tiendo%2018$',
  database: 'tickets',
  entities: [TicketsEntity],
  synchronize: true,
  logging: true,
};

const AppDataSource = new DataSource(options);

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });

export const getDataSource = (delay = 3000): Promise<DataSource> => {
  if (AppDataSource.isInitialized) return Promise.resolve(AppDataSource);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (AppDataSource.isInitialized) resolve(AppDataSource);
      else reject('Failed to create connection with database');
    }, delay);
  });
};
