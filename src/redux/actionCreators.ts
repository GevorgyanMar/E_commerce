type Action<Type extends string, Payload> = {
  type: Type;
  payload: Payload;
};

export const createAction =
  <T extends string, P>(type: T) =>
  (payload: P): Action<T, P> => ({ type, payload });
