import { MotherCreator } from './mother_creator';

export class DateMother {
  public static random(): string {
    return MotherCreator.random().date.soon().toISOString();
  }
}
