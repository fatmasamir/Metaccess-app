import type { CallFunction, CallServer } from "./interface/callServer";
const defaultOptions: CallServer = {
  url: "",
  auth: false,
  data: {},
  method: "GET",
  type: "application/json",
  base: true,
};

/**
 * call server function to handel request from client to server
 * @param {CallServer} options - call server options
 * @returns
 */
let callServer: CallFunction = async (options) => {
  // set options
  options = {
    ...defaultOptions,
    ...options,
  };

  // base url
  const base_url: string = `http://api.eagles-car.com`;

  const end_point: string = `${base_url}/${options.url}`;
  // header
  const reqHeader = new Headers();

  // accept type
  reqHeader.append("Accept", "application/json");
  // if type return false for make request calc data
  if (options.type) reqHeader.append("Content-Type", options.type as string);
  // set lang
  reqHeader.append("X-localization", localStorage.getItem("lang") || "en");

  // check if is auth request
  if (options.auth) {
    reqHeader.append(
      "Authorization",
      `Bearer ${localStorage.getItem("access_token")}`
    );
  }
  // console.log(options.data!.constructor.name);
  // resposne
  let response = null;
  if (options.method == "POST" || options.method == "PUT") {
    if (options.data!.constructor.name != "Object") {
      response = await fetch(end_point, {
        method: options.method,
        headers: reqHeader,
        body: options.data as FormData,
      }).catch((err) => console.log("error: ", err));
      // console.log("form daat")
    } else {
      response = await fetch(end_point, {
        method: options.method,
        headers: reqHeader,
        body: JSON.stringify(options.data),
      }).catch((err) => console.log("error: ", err));
    }
  } else {
    response = await fetch(end_point, {
      method: options.method,
      headers: reqHeader,
    }).catch((err) => console.log("error: ", err));
  }

  return await response;
};

export default callServer;
