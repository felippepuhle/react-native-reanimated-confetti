export const randomNumber = (min: number, max: number) =>
  Math.random() * (max - min) + min;

export const randomElementOfArray = <T>(arr: T[]): T =>
  arr[Math.floor(Math.random() * arr.length)];
