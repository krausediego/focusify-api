export const hoursTasks = (quantity: number) => {
  const minutes = quantity * 25;
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  return `${hours}h ${remainingMinutes}m`;
};
