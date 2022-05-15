export default function getRandom<T>(array: T[]): T;
export default function getRandom<T>(array: T[], qty?: number): T[];

export default function getRandom<T>(array: T[], qty?: number): T | T[] {
  if (qty !== undefined) {
    const arr: T[] = [];

    for (let i = 0; i < qty; i++) {
      arr.push(array[Math.floor(Math.random() * array.length)]);
    }

    return arr;
  } else {
    return array[Math.floor(Math.random() * array.length)];
  }
}

export function getRandomNumberBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
