import axios from "axios";

const AxiosWithAuth = () => {
  const token = localStorage.getItem("coronaHelpToken");

  const backendURL = process.env.REACT_APP_BACKEND_URL;

  return axios.create({
    baseURL: backendURL,
    headers: {
      Authorization: token
    }
  });
};

export default AxiosWithAuth;
