import { NewableClass } from '@app/shared/domain/newable_class';
import { Primitives } from '@app/shared/domain/types/primitives.type';
import { ValueObject } from '@app/shared/domain/value_object/value_objects';
import { ValueTransformer } from 'typeorm';

export const ValueObjectTransformer = <T extends Primitives>(
  ValueObject: NewableClass<ValueObject<T>>,
): ValueTransformer => {
  return {
    to: (value: ValueObject<T>): T => value.value,
    from: (value: T): ValueObject<T> => new ValueObject(value),
  };
};
