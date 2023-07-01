import { EntityManager, EntitySchema, Repository } from 'typeorm';
import { getDataSource } from './typeorm/data-source';

export abstract class TypeOrmRepository<T> {
  protected abstract entitySchema(): EntitySchema<T>;

  protected async repository(): Promise<Repository<T>> {
    const AppDataSource = await getDataSource();
    return await AppDataSource.getRepository<T>(this.entitySchema());
  }

  protected async persist(model: T): Promise<T> {
    const repository = await this.repository();
    return await repository.save(model as any);
  }
}
