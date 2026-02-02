import axios from "axios";

const BASE_URL = "https://api.escuelajs.co/api/v1";

export const loginUser = (email, password) => {
  return axios.post(`${BASE_URL}/auth/login`, {
    email,
    password,
  });
};

export const signupUser = (data) => {
  return axios.post(`${BASE_URL}/users`, data);
};
