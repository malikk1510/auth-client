import axios from "axios";
import { constants } from "../../config";
export const api = constants.endpoint;

export const error = (error) => {
  return { status: "error", isSuccessfull: false, data: error };
};
export const success = (data) => {
  return { status: "success", isSuccessfull: true, data: data };
};

//getting token
export const getAuthHeaders = (token) => {
  return { Authorization: "Bearer " + token };
};

export const get = async (url, headers) => {
  try {
    let response = await axios.get(url, { headers });
    return success(response.data);
  } catch (e) {
    return error(e.response);
  }
};

export const post = async (url, data, headers) => {
  try {
    let response = await axios.post(url, data, { headers });
    // console.log('response: ', response);

    return success(response.data);
  } catch (e) {
    return error(e.response);
    // console.log('e.response: ', e.response);
  }
};

export const patch = async (url, data, headers) => {
  try {
    let response = await axios.patch(url, data, { headers });

    return success(response.data);
  } catch (e) {
    return error(e.response);
  }
};

export const put = async (url, data, headers) => {
  try {
    let response = await axios.put(url, data, { headers });

    return success(response.data);
  } catch (e) {
    return error(e.response);
  }
};

export const del = async (url, headers) => {
  try {
    let response = await axios.delete(url, { headers });
    return success(response.data);
  } catch (e) {
    return error(e.response);
  }
};
