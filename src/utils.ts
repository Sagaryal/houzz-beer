export const generateRandomId = () => {
  return Math.floor(Math.random() * 1000) + 1;
};

export const capitalizeWords = (text: string) => {
  return text.replace(/\b\w/g, (match) => match.toUpperCase());
};
