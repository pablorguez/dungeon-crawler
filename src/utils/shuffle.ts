export const shuffle = (stack: any[]): any[] => {
  for (let i = stack.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [stack[randomIndex], stack[i]] = [stack[i], stack[randomIndex]];
  }

  return stack;
};
