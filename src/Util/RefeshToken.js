const key = "refeshToken";
export const saveRefeshToken = (refeshToken) => {
  sessionStorage.setItem(key, refeshToken);
};
export const getRefeshToken = () => {
  return sessionStorage.getItem(key);
};
export const removeRefeshToken = () => {
  sessionStorage.removeItem(key);
};
