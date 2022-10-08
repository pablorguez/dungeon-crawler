export const roll = (amount: number): number[] =>
  Array.from({ length: amount }, () => Math.floor(Math.random() * 6) + 1);
