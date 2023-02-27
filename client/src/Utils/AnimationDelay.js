export const animationDelay = (time) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};
