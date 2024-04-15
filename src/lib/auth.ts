import Cookies from "js-cookie";

export const getTokenFromCookie = (): string | null => {
  return Cookies.get("devve_jwt") || null;
};

export const isAuthenticated = (): boolean => {
  const token = getTokenFromCookie();
  console.log(token);
  return !!token;
};
