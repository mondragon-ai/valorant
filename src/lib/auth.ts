import Cookies from "js-cookie";

export const getTokenFromCookie = (): Promise<string | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const jwt = Cookies.get("devve_jwt");
      resolve(jwt !== undefined ? jwt : null);
    }, 500);
  });
};

export const isAuthenticated = async (): Promise<boolean> => {
  const token = await getTokenFromCookie();
  console.log(token);
  return !!token;
};
