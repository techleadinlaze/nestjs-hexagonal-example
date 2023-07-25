import { MotherCreator } from './mother_creator';

export class IntegerMother {
  public static random(max?: number): number {
    return MotherCreator.random().number.int(max);
  }
}
