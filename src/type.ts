export interface UseCase<Input, Output> {
  (input: Input): Promise<Output>;
}

export type UseCaseContext = any;

export interface UseCaseFactory<
  U extends UseCase<any, any>,
  C extends UseCaseContext
> {
  (context: C): U;
}
