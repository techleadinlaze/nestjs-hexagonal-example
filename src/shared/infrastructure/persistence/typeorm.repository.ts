import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, EntitySchema, Repository, getConnection } from 'typeorm';

export abstract class TypeOrmRepository<T> {
  constructor(private _client: DataSource) {}

  protected abstract entitySchema(): EntitySchema<T>;

  protected async client(): Promise<DataSource> {
    this._client = await getConnection('albumsConnection');
    return this._client;
  }

  protected async repository(): Promise<Repository<T>> {
    this._client = await getConnection('tickets');
    console.log(this._client);
    return (await this._client).getRepository(this.entitySchema());
  }

  protected async persist(model: T): Promise<T> {
    const repository = await this.repository();
    return await repository.save(model as any);
  }
}
