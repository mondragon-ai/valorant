import axios, {AxiosRequestConfig} from "axios";
const URL = true
  ? "https://us-central1-devve-cod.cloudfunctions.net"
  : "http://127.0.0.1:5001/devve-cod/us-central1";

export const serverApiRequest = async (
  resource: string,
  method: string,
  data: any,
): Promise<{
  text: string;
  status: 200 | 201 | 202 | 204 | 400 | 401 | 403 | 404 | 409 | 422 | 429 | 500;
  data: any;
}> => {
  let options: AxiosRequestConfig<any> = {
    method: method === "" ? "GET" : method,
    url: URL + resource,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (data) {
    options = {
      ...options,
      data: data,
    };
  }

  try {
    const response = await axios(options);

    console.log(response);
    if (response.status === 200) {
      const result = await response.data;
      return {
        text: ` - Success. ${resource}`,
        status: response.status,
        data: result,
      };
    } else if (response.status === 201) {
      const result = await response.data;
      return {
        text: ` - Bigly Customer Added to List. ${resource}`,
        status: response.status,
        data: result,
      };
    } else if (response.status === 204) {
      return {
        text: ` - Bigly Customer Added to List. ${resource}`,
        status: response.status,
        data: null,
      };
    }
    return {
      text: ``,
      status: 200,
      data: null,
    };
  } catch (error) {
    console.error(error);
    if ((error as any).response.status === 400) {
      const text =
        "[BIGLY] 400 - Bad Request: Request is missing or has a bad parameter";
      console.error(text);

      return {
        text: text,
        status: 400,
        data: null,
      };
    } else if ((error as any).response.status === 401) {
      const text =
        "[BIGLY] 401 - Not Authorized: Key is valid, but account does not have permissions to perform this action";
      console.error(text);

      return {
        text: text,
        status: 401,
        data: null,
      };
    } else if ((error as any).response.status === 403) {
      const text =
        "[BIGLY] 403 - Forbidden: Request is missing or has an invalid API key";
      console.error(text);

      return {
        text: text,
        status: 403,
        data: null,
      };
    } else if ((error as any).response.status === 404) {
      const text =
        "[BIGLY] 404 - Not Found: The requested resource doesn't exist";
      console.error(text);

      return {
        text: text,
        status: 404,
        data: null,
      };
    } else if ((error as any).response.status === 409) {
      const text = "[BIGLY] 409 - Conflict: User Exists.";

      const result = await (error as any).response.data;
      return {
        text: text,
        status: 409,
        data: result,
      };
    } else if ((error as any).response.status === 422) {
      const text =
        "[BIGLY] 422 - The server was unable to process the request because it contains invalid data";
      console.error(text);

      return {
        text: text,
        status: 422,
        data: null,
      };
    } else if ((error as any).response.status === 429) {
      const text =
        "[BIGLY] 429 - Rate Limit: You hit the rate limit for this endpoint";
      console.error(text);

      return {
        text: text,
        status: 429,
        data: null,
      };
    } else if ((error as any).response.status === 500) {
      const text =
        "[BIGLY] 500 - Server Error: Something is wrong on Bigly's end";
      console.error(text);

      return {
        text: text,
        status: 500,
        data: null,
      };
    } else {
      const text = `[BIGLY] - Unknown Error: Status Code ${
        (error as any).response.status
      }`;
      console.error(text);
      console.error((error as any).response);

      return {
        text: text,
        status: (error as any).response.status,
        data: null,
      };
    }
  }
};
