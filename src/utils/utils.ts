export const clearMessage = (text: string) => {
  return setTimeout(() => {
    text = '';
  }, 3000);
};
