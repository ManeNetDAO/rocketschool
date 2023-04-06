export const getRandomInRange = (max: number) => {
  return (
    Date.now()
      .toString()
      .split('')
      .reduce((a, b) => a + Number(b), 0) % max
  );
};
