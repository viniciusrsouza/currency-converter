import credentials from "../credentials/credentials.json";

const BASE_URL = "https://openexchangerates.org/api/";
const APP_ID = process.env.ENCHANGE_APP_ID || credentials.app_id || "";

const APIHelper = {
  async get(endpoint, params) {
    const url = new URL(`${BASE_URL}${endpoint}`);
    const _params = { ...params, app_id: APP_ID };
    Object.keys(_params).forEach((key) =>
      url.searchParams.append(key, _params[key])
    );

    const res = await fetch(url);
    return res.json();
  },
};

export default APIHelper;
