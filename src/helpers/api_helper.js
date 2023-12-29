import axios from "axios";


const API_URL = "https://hysportx.com/application/api";
const axiosApi = axios.create({
  baseURL: API_URL,
});



axiosApi.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export function setToken(token){
  axiosApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}


export async function get(url, config = {}) {
  return await axiosApi
    .get(url, { ...config })
    .then((response) => response.data)
   
}

export async function post(url, data, config = {}) {
  return axiosApi
    .post(url, { ...data }, { ...config })
    .then((response) => response.data);
}

export async function put(url, data, config = {}) {
  return axiosApi
    .put(url, { ...data }, { ...config })
    .then((response) => response.data);
}

export async function del(url, config = {}) {
  return await axiosApi
    .delete(url, { ...config })
    .then((response) => response.data);
}
