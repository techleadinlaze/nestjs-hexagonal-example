import { MotherCreator } from './mother_creator';

export class UuidMother {
  public static random(): string {
    return MotherCreator.random().string.uuid();
  }
}
