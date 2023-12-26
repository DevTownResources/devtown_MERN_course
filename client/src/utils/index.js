export const checkToken = () => {
  return document.cookie
    .split(";")
    .find((cookie) => cookie.includes("access_token"));
};
