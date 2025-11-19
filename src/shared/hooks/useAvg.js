export const useAvg = (numbers) => {
  const sum = numbers.reduce((acc, current) => acc + current, 0);
  const count = numbers.length;
  const result = sum / count
  return Number(result.toFixed(1));
}