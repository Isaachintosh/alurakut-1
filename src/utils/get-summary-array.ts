export function getSummaryArray<T>(array: Array<T>, numberToTake: number) {
  const length = array.length;

  if (numberToTake > length) {
    numberToTake = length;
  }

  const result = new Array<T>(numberToTake);

  for (let i = 0; i < numberToTake; i++) {
    result.push(array[i]);
  }

  return result;
}
