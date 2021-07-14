export function getRandom<T>(array: Array<T>, numberToTake: number) {
  const result = new Array<T>(numberToTake);
  let length = array.length;
  const taken = new Array(length);
  let number = numberToTake;

  if (number > length) number = length;

  while (numberToTake--) {
    const x = Math.floor(Math.random() * length);
    result[numberToTake] = array[x in taken ? taken[x] : x];
    taken[x] = --length in taken ? taken[length] : length;
  }

  return Array.from(new Set(result.filter((item) => !!item)));
}
