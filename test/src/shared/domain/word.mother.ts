import { MotherCreator } from './mother_creator';

export class WordMother {
  public static random({
    minLength = 1,
    maxLength,
  }: {
    minLength?: number;
    maxLength: number;
  }): string {
    return (
      MotherCreator.random().lorem.word(
        Math.floor(Math.random() * (maxLength - minLength)) + minLength,
      ) || 'word'
    );
  }
}
