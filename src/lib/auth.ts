import Cookies from "js-cookie";

export const getTokenFromCookie = async (): Promise<string | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const jwt = Cookies.get("devve_jwt");
      resolve(jwt !== undefined ? jwt : null);
    }, 500);
  });
};

export const getRefreshTokenFromCookie = async (): Promise<string | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const refresh = Cookies.get("devve_refresh_jwt");
      resolve(refresh !== undefined ? refresh : null);
    }, 500);
  });
};

export const isAuthenticated = async (): Promise<boolean> => {
  const token = await getTokenFromCookie();
  return !!token;
};
