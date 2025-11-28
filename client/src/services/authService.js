import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/auth",
});

export const login = async (payload) => {
  try {
    const response = await api.post("/login", payload);
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

export const register = async (name, email, dateOfBirth) => {
  try {
    const response = await api.post("/register", {
      name,
      email,
      dateOfBirth,
    });
    return response.data;
  } catch (error) {
    console.error("Registration failed:", error);
    throw error;
  }
};