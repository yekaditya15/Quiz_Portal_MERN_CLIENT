const { default: axiosInstance } = require(".");

export const registerUser = async (payload) => {
  try {
    const response = await axiosInstance.post("/api/users/register", payload);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const loginUser = async (payload) => {
  try {
    const response = await axiosInstance.post("/api/users/login", payload, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getUserInfo = async () => {
  try {
    const response = await axiosInstance.post("/api/users/get-user-info");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const updateUserPassword = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/users/update-password",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
