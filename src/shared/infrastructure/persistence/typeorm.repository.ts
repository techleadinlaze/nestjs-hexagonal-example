import { EntityTarget, Repository } from 'typeorm';
import { getDataSource } from './typeorm/data-source';

export abstract class TypeOrmRepository<T> {
  protected abstract entityTarget(): EntityTarget<T>;

  protected async repository(): Promise<Repository<T>> {
    const AppDataSource = await getDataSource();
    return AppDataSource.getRepository<T>(this.entityTarget());
  }

  protected async persist(model: T): Promise<T> {
    const repository = await this.repository();
    return await repository.save(model);
  }
}
