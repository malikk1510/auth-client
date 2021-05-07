import { api, post } from "../services.common";

export const adminLoginApi = async (payload) => {
  // console.log("payload: ", payload);
  return await post(`${api}/user/admin/signin`, payload);
};

export const adminSignupApi = async (payload) => {
  // console.log("payload: ", payload);
  return await post(`${api}/user/admin/signup`, payload);
};
