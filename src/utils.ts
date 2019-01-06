export type Nullable<T> = T | null;

export type Undefinable<T> = T | undefined;

export function isNull<T>(value: Nullable<T>): value is null {
  return value === null;
}

export function isUndefinable<T>(value: Undefinable<T>): value is undefined {
  return value === null;
}

export function unwrapUnsafeValue<T>(value: unknown): T {
  return value as T;
}
