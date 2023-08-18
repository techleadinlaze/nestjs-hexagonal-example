import { Primitives } from './types/primitives.type';

export interface NewableClass<T> extends Function {
  new (...args: Primitives[]): T;
}
