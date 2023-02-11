const key = "refeshToken";
export const saveRefeshToken = (refeshToken) => {
  localStorage.setItem(key, refeshToken);
};
export const getRefeshToken = () => {
  return localStorage.getItem(key);
};
export const removeRefeshToken = () => {
  localStorage.removeItem(key);
};
