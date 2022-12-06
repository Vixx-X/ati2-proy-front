import { useCallback, useState } from 'react';

export default function useArray<Type>(defaultValue: Type[]) {
  const [array, setArray] = useState(defaultValue ?? []);

  const push = useCallback((element: Type) => {
    setArray((a) => [...a, element]);
  }, []);

  const filter = useCallback((callback: any) => {
    setArray((a) => a.filter(callback));
  }, []);

  const update = useCallback((index: number, newElement: Type) => {
    setArray((a) => [
      ...a.slice(0, index),
      newElement,
      ...a.slice(index + 1, a.length),
    ]);
  }, []);

  const remove = useCallback((index: number) => {
    setArray((a) => [...a.slice(0, index), ...a.slice(index + 1, a.length)]);
  }, []);

  const clear = useCallback(() => {
    setArray([]);
  }, []);

  return {
    array,
    set: setArray,
    push,
    filter,
    update,
    remove,
    clear,
  };
}
