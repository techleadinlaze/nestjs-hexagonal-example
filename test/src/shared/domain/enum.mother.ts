import { MotherCreator } from './mother_creator';

export class EnumMother {
  public static random<T>(values: T[]): T {
    return MotherCreator.random().helpers.arrayElement(values);
  }
}
