import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

export const loginUser = (data) => {
  return axios.post(`${BASE_URL}/auth/login`, data);
};

export const signupUser = (data) => {
  return axios.post(`${BASE_URL}/auth/signup`, data);
};
