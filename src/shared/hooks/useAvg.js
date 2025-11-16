export const useAvg = (numbers) => {
  const sum = numbers.reduce((acc, current) => acc + current, 0);
  const count = numbers.length;
  return sum / count;
}