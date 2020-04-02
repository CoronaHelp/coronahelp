import axios from "axios";

const AxiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://supplyhelper-be-staging.herokuapp.com",
    headers: {
      Authorization: token
    }
  });
};

export default AxiosWithAuth;