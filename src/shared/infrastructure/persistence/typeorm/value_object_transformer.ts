import { NewableClass } from '@app/shared/domain/newable_class';
import {
  Primitives,
  ValueObject,
} from '@app/shared/domain/value_object/value_objects';

export const ValueObjectTransformer = <T extends Primitives>(
  ValueObject: NewableClass<ValueObject<any>>,
) => {
  return {
    to: (value: ValueObject<T>): T => value.value,
    from: (value: T): ValueObject<T> => new ValueObject(value),
  };
};
