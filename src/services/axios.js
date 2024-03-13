import axios from "axios";

const API_URL = "http://localhost:3001";

export const postDataCompany = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/company`, data, {
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
    });
    return response;
  } catch (error) {
    console.error("Error al realizar la petición POST:", error);
    throw error;
  }
};

export const postDataLogin = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/login`, data, {
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
    });
    return response;
  } catch (error) {
    console.error("Error al realizar la petición POST:", error);
    throw error;
  }
};

export const postDataCompanies = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/login`, data, {
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
    });
    return response;
  } catch (error) {
    console.error("Error al realizar la petición POST:", error);
    throw error;
  }
};

export const postDataJob = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/job`, data);
    return response;
  } catch (error) {
    console.error("Error al realizar la petición POST:", error);
    throw error;
  }
};
