async function asyncForEach<T>(
  array: T[],
  callback: (datum: T, index: number, data: T[]) => Promise<any>
): Promise<void> {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}

export default asyncForEach
